const Scene = require("./scene");
const TopPanel = require("../GameObjects/Battle/toppanel");
const TeamPanel = require("../GameObjects/Battle/teampanel");
const internalMemory = require("./../Models/internalmemory");
const Point = require("../math/point");
const BattleBottomPanel = require("../GameObjects/Battle/battlebottompanel");
const CharacterAttackIndication = require("../GameObjects/Battle/enemyhit");
const { randomInt } = require("../math/common");
const TeamHit = require("../GameObjects/Battle/teamhit");
const {
  SCENE_KEY_BATTLE_END,
  SCENE_KEY_DEATH,
} = require("../Models/constants");

module.exports = class BattleScene extends Scene {
  battleTurnInfo;
  currentTurn = 0;
  currentTurnTime = 0;
  victoryTime = 0;
  abilityObject;
  showVictoryText = false;

  onStart() {
    this.backgroundColor = "#FFFFFF";
    this.topPanel = new TopPanel(this.canvas);
    this.teamPanel = new TeamPanel(this.canvas);
    this.enemy = internalMemory.monster;
    this.enemy.setFontSize(16, this.canvas);
    const enemyCenter = new Point(536 + 112, 204 + 88);
    this.enemy.bounds = this.enemy.bounds.centerOnPoint(enemyCenter);
    this.bottomPanel = new BattleBottomPanel(this.canvas);
    internalMemory.currentRound = 0;
    for (let i = 0; i < internalMemory.team.length; i++) {
      const characterStats = internalMemory.team[i];
      characterStats.stunnedUntilTurn = -9999;
      for (let j = 0; j < characterStats.abilities.length; j++) {
        characterStats.abilities[j].lastUsedRound = -9999;
      }
    }
  }

  renderInternal(deltaTime) {
    this.canvas.clear();
    this.topPanel.render(this.canvas, deltaTime);
    this.enemy.render(this.canvas);
    this.teamPanel.render(this.canvas);
    if (this.showVictoryText) {
      this.renderVictory(deltaTime);
    } else if (this.teamPanel.selectAbilities) {
      this.renderSelectAbilitiesExtra();
    } else {
      this.renderCombat(deltaTime);
    }
  }

  renderVictory(deltaTime) {
    this.victoryTime += deltaTime;
    this.bottomPanel.render(this.canvas, "Can't believe I lost that easy...");
    if (this.victoryTime > 2) {
      if (internalMemory.visitingPlanet) {
        internalMemory.visitingPlanet.isVisited = true;
      }
      this.onChangeScene(SCENE_KEY_BATTLE_END);
    }
  }

  renderCombat(deltaTime) {
    this.currentTurnTime += deltaTime;
    if (this.currentTurnTime > 0.5) {
      if (this.enemy.stats.isDead()) {
        this.showVictoryText = true;
        internalMemory.planetsVisited += 1;
        this.renderVictory(0);
      }
      this.currentTurn += 1;
      if (this.currentTurn >= this.battleTurnInfo.abilities.length + 1) {
        this.battleTurnInfo = null;
        this.currentTurn = 0;
        this.currentTurnTime = 0;
        this.abilityObject = null;
        this.teamPanel.deselectAbilities(this.canvas);
        this.teamPanel.selectAbilities = true;
        this.renderSelectAbilitiesExtra();
        return;
      } else {
        this.currentTurnTime = 0;
        this.abilityObject = null;
      }
    }
    if (!this.abilityObject) {
      if (this.currentTurn < this.battleTurnInfo.abilities.length) {
        const character = this.battleTurnInfo.characterStats[this.currentTurn];
        character.onDamage = null;
        const ability = this.battleTurnInfo.abilities[this.currentTurn];
        const result = ability.use(character, internalMemory.team, [
          this.enemy.stats,
        ]);
        ability.lastUsedRound = internalMemory.currentRound;
        this.abilityObject = this.createTeamAbilityObject(result.damage, [
          this.enemy.bounds,
        ]);
      } else {
        const target = this.getRandomAliveTarget();
        const availableAbilities = this.enemy.stats.abilities.filter(
          (x) => x.lastUsedRound + x.cooldown < internalMemory.currentRound
        );
        const ability =
          availableAbilities[randomInt(0, availableAbilities.length)];
        const result = ability.use(
          this.enemy.stats,
          [this.enemy.stats],
          [internalMemory.team[target]]
        );
        ability.lastUsedRound = internalMemory.currentRound;
        internalMemory.currentRound += 1;
        this.abilityObject = this.createMonsterAbilityObject(
          target,
          result.damage
        );
      }
    }
    this.abilityObject.render(this.canvas);
    this.bottomPanel.render(this.canvas, "");
  }

  getRandomAliveTarget() {
    var target = randomInt(0, internalMemory.team.length);
    if (internalMemory.team[target].isDead()) {
      for (let i = 0; i < 4; i++) {
        target = (target + 1) % 4;
        if (!internalMemory.team[target].isDead()) {
          return target;
        }
      }
    }
    return target;
  }

  createMonsterAbilityObject(target, damage) {
    return new TeamHit(
      this.canvas,
      this.teamPanel.abilityPanels[target].background.bounds.location.add(
        new Point()
      ),
      damage
    );
  }

  createTeamAbilityObject(damage, targetBounds) {
    const indication = new CharacterAttackIndication(
      this.canvas,
      damage,
      targetBounds
    );
    indication.bounds = indication.bounds.centerOnPoint(
      this.battleTurnInfo.location[this.currentTurn]
    );
    return indication;
  }

  renderSelectAbilitiesExtra() {
    const hoverInfo = this.teamPanel.tryGetHoveredAbility();
    if (hoverInfo.foundInfo) {
      this.bottomPanel.render(this.canvas, hoverInfo.info.description);
    } else {
      this.bottomPanel.render(this.canvas, "");
    }
    const isFinishedInfo = this.teamPanel.tryCheckFinished();
    if (isFinishedInfo.isFinished) {
      if (isFinishedInfo.deadCount === 4) {
        this.onChangeScene(SCENE_KEY_DEATH);
        return;
      }
      this.battleTurnInfo = isFinishedInfo;
      this.teamPanel.selectAbilities = false;
    }
  }

  onMouseDown(point) {
    this.teamPanel.onMouseDown(point);
  }

  onMouseMove(point) {
    this.teamPanel.onMouseMove(point);
  }

  onMouseUp(point) {
    this.teamPanel.onMouseUp(point);
  }
};

const BattleStartBottom = require("../GameObjects/BattleStart/battlestartbottom");
const LeftInformation = require("../GameObjects/BattleStart/leftinformation");
const MonsterView = require("../GameObjects/BattleStart/monsterview");
const SpaceKraken = require("../GameObjects/Enemies/spacekraken");
const {
  SCENE_KEY_WORLD,
  SCENE_KEY_BATTLE_INTERLUDE,
} = require("../Models/constants");
const { randomInt } = require("../math/common");
const Scene = require("./scene");
const internalMemory = require("./../Models/internalmemory");
const AsteroidSpider = require("../GameObjects/Enemies/asteroidspider");
const PlanetaryBehemoth = require("../GameObjects/Enemies/planetarybehemoth");
const WarpDemon = require("../GameObjects/Enemies/warpdemon");

module.exports = class BattleStartScene extends Scene {
  constructor(canvas, onChangeScene) {
    super(canvas, onChangeScene);
    this.backgroundColor = "#FFFFFF";
  }

  onStart() {
    this.bottom = new BattleStartBottom(
      this.canvas,
      () => {
        this.onChangeScene(SCENE_KEY_WORLD);
      },
      () => {
        this.onChangeScene(SCENE_KEY_BATTLE_INTERLUDE);
      }
    );
    this.leftInformation = new LeftInformation(this.canvas);

    internalMemory.monster = this.getRandomEnemy();
    this.monsterView = new MonsterView(this.canvas, internalMemory.monster);
  }

  getRandomEnemy() {
    /*
    const enemies = [
      new SpaceKraken(this.canvas),
      new AsteroidSpider(this.canvas),
      new PlanetaryBehemoth(this.canvas),
      new WarpDemon(this.canvas),
    ];
    return enemies[randomInt(0, enemies.length)];
    */
    return new SpaceKraken(this.canvas);
  }

  renderInternal(deltaTime) {
    this.canvas.clear();
    this.bottom.render(this.canvas, deltaTime);
    this.leftInformation.render(this.canvas);
    this.monsterView.render(this.canvas);
  }

  onMouseDown(point) {
    this.bottom.onMouseDown(point);
  }

  onMouseMove(point) {
    this.bottom.onMouseMove(point);
  }

  onMouseUp(point) {
    this.bottom.onMouseUp(point);
  }
};

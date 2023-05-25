const Scene = require("./scene");
const internalMemory = require("./../Models/internalmemory");
const Point = require("../math/point");
const BattleEndBottomPanel = require("../GameObjects/BattleEnd/battleendbottompanel");
const { SCENE_KEY_WORLD } = require("../Models/constants");
const LeftInformation = require("../GameObjects/BattleStart/leftinformation");
const MonsterViewEnd = require("../GameObjects/BattleEnd/monsterviewend");

module.exports = class BattleEndScene extends Scene {
  onStart() {
    this.backgroundColor = "#FFFFFF";

    this.enemy = internalMemory.monster;
    this.enemy.setFontSize(16, this.canvas);
    const enemyCenter = new Point(288 + 112, 136 + 56);
    this.enemy.bounds = this.enemy.bounds.centerOnPoint(enemyCenter);
    this.bottomPanel = new BattleEndBottomPanel(this.canvas, () =>
      this.onChangeScene(SCENE_KEY_WORLD)
    );
    this.leftInformation = new LeftInformation(this.canvas);
    this.monsterView = new MonsterViewEnd(this.canvas, this.enemy);
  }

  renderInternal(deltaTime) {
    this.canvas.clear();

    this.enemy.render(this.canvas);
    this.leftInformation.render(this.canvas);
    this.bottomPanel.render(this.canvas, deltaTime);
    this.monsterView.render(this.canvas);
  }

  onMouseDown(point) {
    this.bottomPanel.onMouseDown(point);
  }

  onMouseMove(point) {
    this.bottomPanel.onMouseMove(point);
  }

  onMouseUp(point) {
    this.bottomPanel.onMouseUp(point);
  }
};

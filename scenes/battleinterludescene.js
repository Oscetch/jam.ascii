const GameObject = require("../GameObjects/gameobject");
const Scene = require("./scene");
const internalMemory = require("./../Models/internalmemory");
const Point = require("../math/point");
const BottomPanelBackground = require("../GameObjects/bottompanelbackground");
const { SCENE_KEY_BATTLE } = require("../Models/constants");

module.exports = class BattleInterludeScene extends Scene {
  onStart() {
    this.backgroundColor = "#FFFFFF";

    this.titleText = new GameObject(
      internalMemory.monster.name,
      this.canvas,
      32
    );
    this.titleText.bounds.location = new Point(208, 48);

    this.monster = internalMemory.monster;
    this.monster.setFontSize(32, this.canvas);
    this.monster.bounds.location = new Point(176, 176);

    this.bottomPanel = new BottomPanelBackground(this.canvas);

    this.leftExclamation = new GameObject("!!!", this.canvas, 35);
    this.leftExclamation.bounds.location = new Point(48, 528.5);
    this.leftExclamation.color = "#FFFFFF";

    this.centerBottomText = new GameObject(
      `You will not get my planet
that easy!`,
      this.canvas,
      14
    );
    this.centerBottomText.bounds.location = new Point(187, 525.5);
    this.centerBottomText.color = "#FFFFFF";

    this.rightExclamation = new GameObject("!!!", this.canvas, 35);
    this.rightExclamation.bounds.location = new Point(645, 528.5);
    this.rightExclamation.color = "#FFFFFF";

    setTimeout(() => {
      this.onChangeScene(SCENE_KEY_BATTLE);
    }, 2000);
  }

  renderInternal(deltaTime) {
    this.canvas.clear();

    this.titleText.render(this.canvas);
    this.monster.render(this.canvas);
    this.bottomPanel.render(this.canvas);
    this.leftExclamation.render(this.canvas);
    this.centerBottomText.render(this.canvas);
    this.rightExclamation.render(this.canvas);
  }
};

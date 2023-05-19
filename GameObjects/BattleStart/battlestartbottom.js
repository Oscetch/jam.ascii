const CanvasASCII = require("../../canvas_ascii");
const Point = require("../../math/point");
const BottomPanelBackground = require("../bottompanelbackground");
const Button = require("../button");
const GameObject = require("../gameobject");

module.exports = class BattleStartBottom {
  /**
   * @callback OnRunCallback
   * @callback OnFightCallback
   */
  /**
   * @param {CanvasASCII} canvas
   * @param {OnRunCallback} onRun
   * @param {OnFightCallback} onFight
   */
  constructor(canvas, onRun, onFight) {
    this.background = new BottomPanelBackground(canvas);
    this.exclamation = new GameObject("!", canvas, 35);
    this.exclamation.color = "#FFFFFF";
    this.exclamation.bounds.location = new Point(48, 528.5);
    this.text = new GameObject(
      `Where you think you are going? 
It's my planet! If you want to
land here you need to fight first!`,
      canvas,
      14
    );
    this.text.bounds.location = new Point(116, 508);
    this.text.color = "#FFFFFF";
    this.fightButton = new Button(
      "FIGHT",
      canvas,
      () => {
        onFight();
      },
      14
    );
    this.fightButton.bounds.location = new Point(626, 496.5);
    this.fightButton.regularColor = "#FFFFFF";
    this.runButton = new Button(
      " RUN ",
      canvas,
      () => {
        onRun();
      },
      14
    );
    this.runButton.bounds.location = new Point(626, 554.5);
    this.runButton.regularColor = "#FFFFFF";
  }

  render(canvas, deltaTime) {
    this.fightButton.update(canvas, deltaTime);
    this.runButton.update(canvas, deltaTime);

    this.background.render(canvas);
    this.exclamation.render(canvas);
    this.text.render(canvas);
    this.fightButton.render(canvas);
    this.runButton.render(canvas);
  }

  onMouseDown(point) {
    this.fightButton.onMouseDown(point);
    this.runButton.onMouseDown(point);
  }

  onMouseUp(point) {
    this.fightButton.onMouseUp(point);
    this.runButton.onMouseUp(point);
  }

  onMouseMove(point) {
    this.fightButton.onMouseMove(point);
    this.runButton.onMouseMove(point);
  }
};

var GameObject = require("./gameobject");
var Point = require("./../math/point");

module.exports = class StartButton {
  #isClicked = false;

  constructor(canvas, onClicked) {
    this.background = new GameObject(
      `
▎       
▂▂▂▂▂▂▂`,
      canvas
    );
    this.background.color = "#FFFFFF";
    this.startText = new GameObject("START", canvas);
    this.startText.color = "#FFFFFF";
    this.centerStartText();
    this.onClicked = onClicked;
  }

  updatePosition(point) {
    this.background.bounds.location = point;
    this.centerStartText();
  }

  update(canvas, deltaTime) {}

  render(canvas) {
    this.background.render(canvas);
    this.startText.render(canvas);
  }

  centerStartText() {
    const bgCenter = this.background.bounds.center();
    this.startText.bounds.location = new Point(
      bgCenter.x - this.startText.bounds.size.x / 2,
      bgCenter.y - this.startText.bounds.size.y / 2
    );
  }

  onMouseDown(point) {
    if (!this.#isClicked && this.background.bounds.containsPoint(point)) {
      this.#isClicked = true;
    }
  }

  onMouseUp(point) {
    if (this.#isClicked && this.background.bounds.containsPoint(point)) {
      this.onClicked();
    }
    this.#isClicked = false;
  }
};

var GameObject = require("./gameobject");
var Hoverable = require("./hoverable");
var Background = require("/background");

module.exports = class Button {
  #isClicked = false;

  constructor(regularAscii, onClickAscii, canvas, onClicked) {
    this.regular = new Hoverable(regularAscii, canvas);
    this.background = new Background(this.regular, canvas);
    this.onClickBackground = new GameObject(onClickAscii, canvas);
    this.onClickText = new GameObject("PRESS", canvas);
    this.onClickBackground.color = "#5722EE";
    this.onClickText.color = "#FFFFFF";
    this.onClicked = onClicked;
  }

  updatePosition(point) {
    this.background.bounds.location = point;
    this.regular.bounds.location = point;
    this.onClickBackground.bounds.location = point;
  }

  update(canvas, deltaTime) {
    this.regular.update(canvas);
    this.onClickBackground.update(canvas);
    let bgCenter = this.onClickBackground.bounds.center();
    let point = new Point(
      bgCenter.x - this.onClickText.bounds.size.x / 2,
      bgCenter.y - this.onClickText.bounds.size.y / 2
    );
    this.onClickText.bounds.location = point;
    this.onClickText.update(canvas);
  }

  render(canvas) {
    this.background.render(canvas);
    if (this.#isClicked) {
      this.onClickBackground.render(canvas);
      this.onClickText.render(canvas);
    } else {
      this.regular.render(canvas);
    }
  }

  onMouseMove(point) {
    this.regular.onMouseMove(point);
  }

  onMouseDown(point) {
    if (!this.#isClicked && this.regular.bounds.containsPoint(point)) {
      this.#isClicked = true;
    }
  }

  onMouseUp(point) {
    if (this.#isClicked && this.regular.bounds.containsPoint(point)) {
      this.onClicked();
    }
    this.#isClicked = false;
  }
};

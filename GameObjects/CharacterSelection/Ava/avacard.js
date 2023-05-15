const Ava = require("./../../Characters/ava");
const Hoverable = require("./../../hoverable");
const Point = require("./../../../math/point");

module.exports = class AvaCard {
  items = [];

  constructor(canvas) {
    const ava = new Ava(canvas);
    ava.bounds.location = new Point(98, 544);

    const icon = new Hoverable("", canvas, 16);
    icon.hoverColor = "#5722EE";
    icon.bounds.location = new Point(230, 580);

    const text = new Hoverable("AVA", canvas, 16);
    text.hoverColor = "#5722EE";
    text.bounds.location = new Point(254, 580);

    this.items.push(ava);
    this.items.push(icon);
    this.items.push(text);
  }

  update(canvas, deltaTime) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].update(canvas, deltaTime);
    }
  }

  render(canvas) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].render(canvas);
    }
  }

  onMouseMove(point) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].onMouseMove(point);
    }
  }

  onMouseUp(point) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].onMouseUp(point);
    }
  }

  onMouseDown(point) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].onMouseDown(point);
    }
  }
};

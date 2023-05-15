const Mia = require("./../../Characters/mia");
const Hoverable = require("./../../hoverable");
const Point = require("./../../../math/point");

module.exports = class MiaCard {
  items = [];

  constructor(canvas) {
    const mia = new Mia(canvas);
    mia.bounds.location = new Point(110, 88);

    const icon = new Hoverable("", canvas, 16);
    icon.hoverColor = "#5722EE";
    icon.bounds.location = new Point(230, 124);

    const miaText = new Hoverable("MIA", canvas, 16);
    miaText.hoverColor = "#5722EE";
    miaText.bounds.location = new Point(254, 124);

    this.items.push(mia);
    this.items.push(icon);
    this.items.push(miaText);
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

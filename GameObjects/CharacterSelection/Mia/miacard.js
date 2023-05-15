const Mia = require("./../../Characters/mia");
const Hoverable = require("./../../hoverable");
const Point = require("./../../../math/point");
const Rectangle = require("./../../../math/rectangle");

module.exports = class MiaCard {
  items = [];
  isHovered = false;

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

    this.combinedBounds = mia.bounds.union(icon.bounds).union(miaText.bounds);
  }

  select() {
    this.items[1].regularColor = "#5722EE";
    this.items[2].regularColor = "#5722EE";
  }

  deselect() {
    this.items[1].regularColor = "#000000";
    this.items[2].regularColor = "#000000";
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
    this.isHovered = this.combinedBounds.containsPoint(point);
    if (this.isHovered) {
      this.items[1].isMouseOver = true;
      this.items[2].isMouseOver = true;
    } else {
      this.items[1].isMouseOver = false;
      this.items[2].isMouseOver = false;
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

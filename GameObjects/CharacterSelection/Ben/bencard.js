const Ben = require("./../../Characters/ben");
const Hoverable = require("./../../hoverable");
const Point = require("./../../../math/point");

module.exports = class BenCard {
  items = [];
  isHovered = false;

  constructor(canvas) {
    const ben = new Ben(canvas);
    ben.bounds.location = new Point(122, 392);

    const icon = new Hoverable("", canvas, 16);
    icon.hoverColor = "#5722EE";
    icon.bounds.location = new Point(230, 428);

    const text = new Hoverable("BEN", canvas, 16);
    text.hoverColor = "#5722EE";
    text.bounds.location = new Point(254, 428);

    this.items.push(ben);
    this.items.push(icon);
    this.items.push(text);
    this.combinedBounds = ben.bounds.union(icon.bounds).union(text.bounds);
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

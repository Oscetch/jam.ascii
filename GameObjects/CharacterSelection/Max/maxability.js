const GameObject = require("./../../gameobject");
const Point = require("./../../../math/point");

module.exports = class MaxAbility extends GameObject {
  #items;

  constructor(canvas) {
    super("", canvas);
    const leftIcon = new GameObject("", canvas, 63);
    leftIcon.bounds.location = new Point(1034, 327);

    const centerIcon = new GameObject("", canvas, 63);
    centerIcon.bounds.location = new Point(1129, 382);

    const rightIcon = new GameObject("", canvas, 63);
    rightIcon.bounds.location = new Point(1223, 327);

    this.#items = [leftIcon, centerIcon, rightIcon];
  }

  render(canvas) {
    for (let i = 0; i < this.#items.length; i++) {
      this.#items[i].render(canvas);
    }
  }
};

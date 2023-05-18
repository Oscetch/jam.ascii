const GameObject = require("./../../gameobject");
const Point = require("./../../../math/point");

module.exports = class MaxAbility extends GameObject {
  #items;

  constructor(canvas) {
    super("", canvas);
    const leftIcon = new GameObject("", canvas, 32);
    leftIcon.bounds.location = new Point(586, 187);

    const centerIcon = new GameObject("", canvas, 32);
    centerIcon.bounds.location = new Point(634, 207);

    const rightIcon = new GameObject("", canvas, 32);
    rightIcon.bounds.location = new Point(682, 187);

    this.#items = [leftIcon, centerIcon, rightIcon];
  }

  render(canvas) {
    for (let i = 0; i < this.#items.length; i++) {
      this.#items[i].render(canvas);
    }
  }
};

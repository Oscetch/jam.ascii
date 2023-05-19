var GameObject = require("../../gameobject");
var Point = require("../../../math/point");

module.exports = class AvaDescription extends GameObject {
  constructor(canvas) {
    super(
      `Ava is a creative and intuitive
person.

She has a strong sense of
empathy and cares deeply for
others.`,
      canvas,
      14
    );
    this.bounds.location = new Point(150, 487);
    this.color = "#FFFFFF";
    this.lineHeight = 7;
  }
};

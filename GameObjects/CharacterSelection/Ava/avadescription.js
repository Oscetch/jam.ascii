var GameObject = require("../../gameobject");
var Point = require("../../../math/point");

module.exports = class AvaDescription extends GameObject {
  constructor(canvas) {
    super(
      `Ava is a creative and intuitive person.

She can be a bit of a dreamer and sometimes gets
lost in her own thoughts, but she has a strong
sense of empathy and cares deeply for others.`,
      canvas,
      16
    );
    this.bounds.location = new Point(224, 792);
    this.color = "#FFFFFF";
  }
};

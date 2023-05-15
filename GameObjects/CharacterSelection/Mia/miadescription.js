var GameObject = require("../../gameobject");
var Point = require("../../../math/point");

module.exports = class MiaDescription extends GameObject {
  constructor(canvas) {
    super(
      `Mia is a natural leader.

She has a soft spot for animals and can often be
found trying to befriend the asteroid's local 
creatures.`,
      canvas,
      16
    );
    this.bounds.location = new Point(224, 792);
    this.color = "#FFFFFF";
  }
};

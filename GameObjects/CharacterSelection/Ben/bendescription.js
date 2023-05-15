var GameObject = require("../../gameobject");
var Point = require("../../../math/point");

module.exports = class BenDescription extends GameObject {
  constructor(canvas) {
    super(
      `Ben is a very logical and analytical person who
approaches problems in a systematic way. 

He can sometimes come off as cold or distant due
to his tendency to think before he speaks.`,
      canvas,
      16
    );
    this.bounds.location = new Point(224, 792);
    this.color = "#FFFFFF";
  }
};

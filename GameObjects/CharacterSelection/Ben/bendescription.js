var GameObject = require("../../gameobject");
var Point = require("../../../math/point");

module.exports = class BenDescription extends GameObject {
  constructor(canvas) {
    super(
      `Ben is a very logical and
analytical person who
approaches problems in a
systematic way. `,
      canvas,
      14
    );
    this.bounds.location = new Point(150, 504);
    this.color = "#FFFFFF";
  }
};

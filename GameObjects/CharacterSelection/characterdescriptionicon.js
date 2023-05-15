var GameObject = require("../gameobject");
var Point = require("../../math/point");

module.exports = class CharacterDescriptionIcon extends GameObject {
  constructor(canvas, iconAscii) {
    super(iconAscii, canvas, 64);
    this.bounds.location = new Point(80, 832);
    this.color = "#FFFFFF";
  }
};

var GameObject = require("../gameobject");
var Point = require("../../math/point");

module.exports = class CharacterDescriptionIcon extends GameObject {
  constructor(canvas, iconAscii) {
    super(iconAscii, canvas, 35);
    this.bounds.location = new Point(58, 529);
    this.color = "#FFFFFF";
  }
};

const CharacterDescriptionIcon = require("../characterdescriptionicon");
const AvaDescription = require("./avadescription");

module.exports = class AvaDescriptionWrapper {
  constructor(canvas) {
    this.description = new AvaDescription(canvas);
    this.icon = new CharacterDescriptionIcon(canvas, "");
  }
};

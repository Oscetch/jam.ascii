const CharacterDescriptionIcon = require("../characterdescriptionicon");
const BenDescription = require("./bendescription");

module.exports = class BenDescriptionWrapper {
  constructor(canvas) {
    this.description = new BenDescription(canvas);
    this.icon = new CharacterDescriptionIcon(canvas, "");
  }
};

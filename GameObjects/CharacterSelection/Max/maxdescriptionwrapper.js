const CharacterDescriptionIcon = require("../characterdescriptionicon");
const MaxDescription = require("./maxdescription");

module.exports = class MaxDescriptionWrapper {
  constructor(canvas) {
    this.description = new MaxDescription(canvas);
    this.icon = new CharacterDescriptionIcon(canvas, "");
  }
};

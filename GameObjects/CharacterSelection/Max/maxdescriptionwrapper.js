const CharacterDescriptionIcon = require("../characterdescriptionicon");
const MaxDescription = require("./maxdescription");
const GameObject = require("../../gameobject");
const Point = require("./../../../math/point");
const Max = require("./../../Characters/max");
const MaxAbility = require("./maxability");

module.exports = class MaxDescriptionWrapper {
  gameObjects = [];

  constructor(canvas) {
    this.description = new MaxDescription(canvas);
    this.icon = new CharacterDescriptionIcon(canvas, "");

    this.titleText = new GameObject("MAX", canvas, 32);
    this.titleText.bounds.location = new Point(352, 48);

    this.bigIcon = new Max(canvas);
    this.bigIcon.setFontSize(16, canvas);
    this.bigIcon.bounds.location = new Point(328, 136);

    this.specialAbiliaIcon = new GameObject(`\n`, canvas, 14);
    this.specialAbiliaIcon.bounds.location = new Point(636.15, 51.66);

    this.specialAbilityText = new GameObject("Special ability", canvas, 14);
    this.specialAbilityText.bounds.location = new Point(540, 99);

    this.abilityIcons = new MaxAbility(canvas);

    this.gameObjects = [
      this.description,
      this.icon,
      this.titleText,
      this.bigIcon,
      this.specialAbiliaIcon,
      this.specialAbilityText,
      this.abilityIcons,
    ];
  }
};

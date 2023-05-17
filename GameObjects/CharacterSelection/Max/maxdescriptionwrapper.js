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

    this.titleText = new GameObject("MAX", canvas, 64);
    this.titleText.bounds.location = new Point(624.12, 80);

    this.bigIcon = new Max(canvas);
    this.bigIcon.setFontSize(32, canvas);
    this.bigIcon.bounds.location = new Point(607.25, 250);

    this.specialAbiliaIcon = new GameObject(`\n`, canvas, 24);
    this.specialAbiliaIcon.bounds.location = new Point(1145, 86);

    this.specialAbilityText = new GameObject("Special ability", canvas, 24);
    this.specialAbilityText.bounds.location = new Point(989, 172);

    this.specialAbilityDescription = new GameObject(`???`, canvas, 14);
    this.specialAbilityDescription.bounds =
      this.specialAbilityDescription.bounds.centerX(
        this.specialAbilityText.bounds
      );
    this.specialAbilityDescription.bounds.location.y = 228;

    this.abilityIcons = new MaxAbility(canvas);

    this.gameObjects = [
      this.description,
      this.icon,
      this.titleText,
      this.bigIcon,
      this.specialAbiliaIcon,
      this.specialAbilityText,
      this.specialAbilityDescription,
      this.abilityIcons,
    ];
  }
};

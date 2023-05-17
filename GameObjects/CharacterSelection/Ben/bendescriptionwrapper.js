const CharacterDescriptionIcon = require("../characterdescriptionicon");
const BenDescription = require("./bendescription");
const Point = require("./../../../math/point");
const Ben = require("./../../Characters/ben");
const GameObject = require("../../gameobject");
const BenAbility = require("./benability");

module.exports = class BenDescriptionWrapper {
  constructor(canvas) {
    this.description = new BenDescription(canvas);
    this.icon = new CharacterDescriptionIcon(canvas, "");

    this.titleText = new GameObject("BEN", canvas, 64);
    this.titleText.bounds.location = new Point(624.12, 80);

    this.bigIcon = new Ben(canvas);
    this.bigIcon.setFontSize(32, canvas);
    this.bigIcon.bounds.location = new Point(607.25, 250);

    this.specialAbiliaIcon = new GameObject(`\n`, canvas, 24);
    this.specialAbiliaIcon.bounds.location = new Point(1145, 86);

    this.specialAbilityText = new GameObject("Special ability", canvas, 24);
    this.specialAbilityText.bounds.location = new Point(989, 172);

    this.specialAbilityDescription = new GameObject(`Logic freeze`, canvas, 14);
    this.specialAbilityDescription.bounds =
      this.specialAbilityDescription.bounds.centerX(
        this.specialAbilityText.bounds
      );
    this.specialAbilityDescription.bounds.location.y = 228;

    this.benIcons = new BenAbility(canvas);

    this.specialAbilityComment = new GameObject(`Stuns the enemy.`, canvas, 14);
    this.specialAbilityComment.bounds =
      this.specialAbilityComment.bounds.centerX(this.specialAbilityText.bounds);
    this.specialAbilityComment.bounds.location.y = 539;

    this.gameObjects = [
      this.description,
      this.icon,
      this.titleText,
      this.bigIcon,
      this.specialAbiliaIcon,
      this.specialAbilityText,
      this.specialAbilityDescription,
      this.specialAbilityComment,
      this.benIcons,
    ];
  }
};

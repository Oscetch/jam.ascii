const CharacterDescriptionIcon = require("../characterdescriptionicon");
const AvaDescription = require("./avadescription");
const GameObject = require("../../gameobject");
const Point = require("./../../../math/point");
const Ava = require("./../../Characters/ava");
const AvaAbility = require("./avaability");

module.exports = class AvaDescriptionWrapper {
  constructor(canvas) {
    this.description = new AvaDescription(canvas);
    this.icon = new CharacterDescriptionIcon(canvas, "");

    this.titleText = new GameObject("AVA", canvas, 64);
    this.titleText.bounds.location = new Point(624.12, 80);

    this.bigIcon = new Ava(canvas);
    this.bigIcon.setFontSize(32, canvas);
    this.bigIcon.bounds.location = new Point(607.25, 250);

    this.specialAbiliaIcon = new GameObject(`\n`, canvas, 24);
    this.specialAbiliaIcon.bounds.location = new Point(1145, 86);

    this.specialAbilityText = new GameObject("Special ability", canvas, 24);
    this.specialAbilityText.bounds.location = new Point(989, 172);

    this.specialAbilityDescription = new GameObject(`Heal team`, canvas, 14);
    this.specialAbilityDescription.bounds =
      this.specialAbilityDescription.bounds.centerX(
        this.specialAbilityText.bounds
      );
    this.specialAbilityDescription.bounds.location.y = 228;

    this.abilityIcons = new AvaAbility(canvas);

    this.specialAbilityComment = new GameObject(
      `I wonder what this does..`,
      canvas,
      14
    );
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
      this.abilityIcons,
    ];
  }
};

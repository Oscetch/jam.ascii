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

    this.titleText = new GameObject("AVA", canvas, 32);
    this.titleText.bounds.location = new Point(352, 48);

    this.bigIcon = new Ava(canvas);
    this.bigIcon.setFontSize(16, canvas);
    this.bigIcon.bounds.location = new Point(328, 136);

    this.specialAbiliaIcon = new GameObject(`\n`, canvas, 14);
    this.specialAbiliaIcon.bounds.location = new Point(636.15, 43.66);

    this.specialAbilityText = new GameObject("Special ability", canvas, 14);
    this.specialAbilityText.bounds.location = new Point(540, 91);

    this.specialAbilityDescription = new GameObject(`Heal team`, canvas, 14);
    this.specialAbilityDescription.bounds.location.x =
      this.specialAbilityText.bounds.location.x;
    this.specialAbilityDescription.bounds.location.y = 137;

    this.abilityIcons = new AvaAbility(canvas);

    this.specialAbilityComment = new GameObject(
      `I wonder what this
does..`,
      canvas,
      14
    );
    this.specialAbilityComment.bounds.location.x =
      this.specialAbilityText.bounds.location.x;
    this.specialAbilityComment.bounds.location.y = 271;

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

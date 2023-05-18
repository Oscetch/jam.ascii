const GameObject = require("../../gameobject");
const CharacterDescriptionIcon = require("../characterdescriptionicon");
const MiaDescription = require("./miadescription");
const Point = require("./../../../math/point");
const Mia = require("./../../Characters/mia");
const MiaAbility = require("./miaability");

module.exports = class MiaDescriptionWrapper {
  gameObjects = [];

  constructor(canvas) {
    this.description = new MiaDescription(canvas);

    this.icon = new CharacterDescriptionIcon(canvas, "");

    this.titleText = new GameObject("MIA", canvas, 32);
    this.titleText.bounds.location = new Point(352, 48);

    this.bigIcon = new Mia(canvas);
    this.bigIcon.setFontSize(16, canvas);
    this.bigIcon.bounds.location = new Point(337.87, 132.33);

    this.specialAbiliaIcon = new GameObject(`\n`, canvas, 14);
    this.specialAbiliaIcon.bounds.location = new Point(636.15, 43.66);

    this.specialAbilityText = new GameObject("Special ability", canvas, 14);
    this.specialAbilityText.bounds.location = new Point(540, 91);

    this.specialAbilityDescription = new GameObject(
      `Mia can tame
animals for joint
battles.`,
      canvas,
      12
    );
    this.specialAbilityDescription.bounds.location.x =
      this.specialAbilityText.bounds.location.x;
    this.specialAbilityDescription.bounds.location.y = 129;

    this.abilityIcons = new MiaAbility(canvas);

    this.specialAbilityComment = new GameObject(
      `You will have a
companion animal.`,
      canvas,
      12
    );

    this.specialAbilityComment.bounds.location.x =
      this.specialAbilityText.bounds.location.x;
    this.specialAbilityComment.bounds.location.y = 336.83;

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

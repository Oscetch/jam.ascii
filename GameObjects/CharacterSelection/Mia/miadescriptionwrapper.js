const GameObject = require("../../gameobject");
const CharacterDescriptionIcon = require("../characterdescriptionicon");
const MiaDescription = require("./miadescription");
const Point = require("./../../../math/point");
const Mia = require("./../../Characters/mia");

module.exports = class MiaDescriptionWrapper {
  gameObjects = [];

  constructor(canvas) {
    this.description = new MiaDescription(canvas);

    this.icon = new CharacterDescriptionIcon(canvas, "");

    this.titleText = new GameObject("MIA", canvas, 64);
    this.titleText.bounds.location = new Point(624.12, 80);

    this.bigIcon = new Mia(canvas);
    this.bigIcon.setFontSize(32, canvas);
    this.bigIcon.bounds.location = new Point(607.25, 250);

    this.specialAbiliaIcon = new GameObject(`\n`, canvas, 24);
    this.specialAbiliaIcon.bounds.location = new Point(1145, 86);

    this.specialAbilityText = new GameObject("Special ability", canvas, 24);
    this.specialAbilityText.bounds.location = new Point(989, 172);

    this.specialAbilityDescription = new GameObject(
      `Mia can tame animals for
joint battles.`,
      canvas,
      14
    );
    this.specialAbilityDescription.bounds.location = new Point(987, 228);

    this.specialAbilityComment = new GameObject(
      `You can select 1 animal.`,
      canvas,
      14
    );
    this.specialAbilityComment.bounds.location = new Point(978, 539);

    this.gameObjects = [
      this.description,
      this.icon,
      this.titleText,
      this.bigIcon,
      this.specialAbiliaIcon,
      this.specialAbilityText,
      this.specialAbilityDescription,
      this.specialAbilityComment,
    ];
  }
};

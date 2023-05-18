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

    this.titleText = new GameObject("BEN", canvas, 32);
    this.titleText.bounds.location = new Point(352, 48);

    this.bigIcon = new Ben(canvas);
    this.bigIcon.setFontSize(16, canvas);
    this.bigIcon.bounds.location = new Point(360, 136);

    this.specialAbiliaIcon = new GameObject(`\n`, canvas, 14);
    this.specialAbiliaIcon.bounds.location = new Point(636.15, 43.66);

    this.specialAbilityText = new GameObject("Special ability", canvas, 14);
    this.specialAbilityText.bounds.location = new Point(540, 91);

    this.specialAbilityDescription = new GameObject(`Logic freeze`, canvas, 12);
    this.specialAbilityDescription.bounds.location.x =
      this.specialAbilityText.bounds.location.x;
    this.specialAbilityDescription.bounds.location.y = 137;

    this.benIcons = new BenAbility(canvas);

    this.specialAbilityComment = new GameObject(`Stuns the enemy.`, canvas, 12);
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
      this.benIcons,
    ];
  }
};

const CharacterStats = require("../../Models/characterstats");
const { getCharacterFromName } = require("../../Models/common");
const CanvasASCII = require("../../canvas_ascii");
const Point = require("../../math/point");
const GameObject = require("../gameobject");
const AbilityPanel = require("./abilitypanel");

module.exports = class CharacterPanel {
  /**
   * @param {CanvasASCII} canvas
   * @param {CharacterStats} character
   * @param {Point} position
   */
  constructor(canvas, character, yPosition) {
    this.character = character;

    this.name = new GameObject(character.name, canvas, 16);
    this.name.bounds.location.x = 104;
    this.name.bounds.location.y = yPosition;

    this.characterIcon = getCharacterFromName(character.name, canvas);
    this.characterIcon.bounds = this.characterIcon.bounds.centerOnPoint(
      new Point(this.name.bounds.right() + 60, 0)
    );
    this.characterIcon.bounds.location.y = yPosition + 4;

    this.healthText = new GameObject(
      `${this.character.currentHealth}/${this.character.health}`,
      canvas,
      12
    );
    this.healthText.bounds.location.x =
      this.name.bounds.right() - this.healthText.bounds.size.x;
    this.healthText.bounds.location.y = this.name.bounds.bottom() + 8;

    this.healthBar = new GameObject(
      `ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ`,
      canvas,
      8
    );
    this.healthBar.bounds.location.x =
      this.name.bounds.right() - this.healthBar.bounds.size.x;
    this.healthBar.bounds.location.y = this.healthText.bounds.bottom() + 4;
  }

  render(canvas, isAbilityPanelSelectedOrHovered) {
    this.name.render(canvas);

    this.updateHealthText(canvas);
    this.healthText.render(canvas);

    this.updateHealthBar(canvas);
    this.healthBar.render(canvas);

    this.updateCharacterIcon(isAbilityPanelSelectedOrHovered);
    this.characterIcon.render(canvas);
  }

  updateCharacterIcon(isAbilityPanelSelectedOrHovered) {
    const center = this.characterIcon.bounds.center();
    if (isAbilityPanelSelectedOrHovered) {
      this.characterIcon.bounds = this.characterIcon.bounds.centerOnPoint(
        new Point(this.name.bounds.right() + 65, center.y)
      );
      this.characterIcon.color = "#5722EE";
    } else {
      this.characterIcon.bounds = this.characterIcon.bounds.centerOnPoint(
        new Point(this.name.bounds.right() + 60, center.y)
      );
      this.characterIcon.color = "#000000";
    }
  }

  updateHealthBar(canvas) {
    const currentHealthDots = Math.floor(
      (this.character.currentHealth / this.character.health) * 14
    );
    if (currentHealthDots !== this.healthBar.backingArray[0].length) {
      const arr = ["", ""];
      for (let i = 0; i < currentHealthDots; i++) {
        arr[0] += "Û";
        arr[1] += "Û";
      }
      this.healthBar.updateBackingArray(canvas, arr);
      this.healthBar.bounds.location.x =
        this.name.bounds.right() - this.healthBar.bounds.size.x;
    }
  }

  updateHealthText(canvas) {
    const newHealth = `${this.character.currentHealth}/${this.character.health}`;
    if (newHealth !== this.healthText.backingArray[0]) {
      this.healthText.updateBackingArray(canvas, [newHealth]);
      this.healthText.bounds.location.x =
        this.name.bounds.right() - this.healthText.bounds.size.x;
    }
  }
};

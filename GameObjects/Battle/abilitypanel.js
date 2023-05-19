const Ability = require("../../Models/Abilities/ability");
const CanvasASCII = require("../../canvas_ascii");
const Point = require("../../math/point");
const Rectangle = require("../../math/rectangle");
const GameObject = require("../gameobject");
const NoAbility = require("./Abilities/noability");
const AbilityChoiceBackground = require("./abilitychoicebackground");

module.exports = class AbilityPanel {
  hasSelection = false;
  selectedIndex = -1;

  /**
   *
   * @param {CanvasASCII} canvas
   * @param {Ability[]} abilities
   * @param {Point} location
   */
  constructor(canvas, abilities, location) {
    this.background = new AbilityChoiceBackground(canvas);
    this.background.bounds.location = location;
    this.abilities = abilities;

    this.abilityIcons = [];

    const tempArr = [];
    for (let i = 0; i < this.background.backingArray.length; i++) {
      tempArr.push(this.background.backingArray[0]);
    }
    const availableSpace = this.background.getBounds(
      tempArr,
      canvas,
      this.background.bounds.location
    );
    const widthPerAbility = availableSpace.size.x / 4;

    for (let i = 0; i < 4; i++) {
      const space = new Rectangle(
        new Point(
          availableSpace.location.x + widthPerAbility * i,
          availableSpace.location.y
        ),
        new Point(widthPerAbility, availableSpace.size.y)
      );
      var abilityIcon;
      if (i < abilities.length) {
        const index = i;
        abilityIcon = abilities[i].createIcon(canvas, () => {
          this.selectAbility(canvas, index);
        });
      } else {
        abilityIcon = new NoAbility(canvas);
      }
      abilityIcon.bounds = abilityIcon.bounds.centerOn(space);
      this.abilityIcons.push(abilityIcon);
    }

    this.selectionIndicator = new GameObject("", canvas, 24);
    this.selectionIndicator.color = "#5722EE";
    this.selectionIndicator.bounds.location.x =
      this.background.bounds.right() + 8;
    this.selectionIndicator.bounds = this.selectionIndicator.bounds.centerY(
      this.background.bounds
    );
  }

  selectAbility(canvas, index) {
    for (let i = 0; i < this.abilityIcons.length; i++) {
      this.abilityIcons[i].isSelected = i === index;
    }
    this.selectionIndicator.updateBackingArray(canvas, ["✓"]);
    this.hasSelection = true;
    this.selectedIndex = index;
  }

  deselectAbility(canvas) {
    for (let i = 0; i < this.abilityIcons.length; i++) {
      this.abilityIcons[i].isSelected = false;
    }
    this.selectionIndicator.updateBackingArray(canvas, [""]);
    this.hasSelection = false;
    this.selectedIndex = -1;
  }

  hasSelectionOrIsHovered() {
    return this.background.isMouseOver || this.hasSelection;
  }

  render(canvas, deltaTime) {
    this.background.render(canvas);
    for (let i = 0; i < this.abilityIcons.length; i++) {
      const abilityIcon = this.abilityIcons[i];
      abilityIcon.update(canvas, deltaTime);
      abilityIcon.render(canvas);
    }

    if (this.hasSelectionOrIsHovered()) {
      this.selectionIndicator.render(canvas);
    }
  }

  onMouseDown(point) {
    for (let i = 0; i < this.abilityIcons.length; i++) {
      this.abilityIcons[i].onMouseDown(point);
    }
  }

  onMouseMove(point) {
    for (let i = 0; i < this.abilityIcons.length; i++) {
      this.abilityIcons[i].onMouseMove(point);
    }
    this.background.onMouseMove(point);
  }

  onMouseUp(point) {
    for (let i = 0; i < this.abilityIcons.length; i++) {
      this.abilityIcons[i].onMouseUp(point);
    }
  }
};

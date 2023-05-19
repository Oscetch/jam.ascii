const internalMemory = require("../../Models/internalmemory");
const Point = require("../../math/point");
const AbilityPanel = require("./abilitypanel");
const CharacterPanel = require("./characterpanel");

module.exports = class TeamPanel {
  selectAbilities = true;

  constructor(canvas) {
    this.characters = [];
    this.abilityPanels = [];

    var yOffset = 108;
    for (let i = 0; i < internalMemory.team.length; i++) {
      const character = new CharacterPanel(
        canvas,
        internalMemory.team[i],
        yOffset
      );
      this.characters.push(character);

      this.abilityPanels.push(
        new AbilityPanel(
          canvas,
          internalMemory.team[i].abilities,
          new Point(character.name.bounds.right() + 112, yOffset + 2)
        )
      );

      yOffset += 96;
    }
  }

  tryGetHoveredAbility() {
    if (!this.selectAbilities) {
      return {
        foundInfo: false,
      };
    }
    for (let i = 0; i < this.abilityPanels.length; i++) {
      const abilityPanel = this.abilityPanels[i];
      for (let iconI = 0; iconI < abilityPanel.abilities.length; iconI++) {
        if (abilityPanel.abilityIcons[iconI].isMouseOver) {
          return {
            foundInfo: true,
            info: abilityPanel.abilities[iconI],
          };
        }
      }
    }
    return {
      foundInfo: false,
    };
  }

  tryCheckFinished() {
    const info = {
      abilities: [],
      characterStats: [],
      location: [],
      deadCount: 0,
      isFinished: true,
    };
    for (let i = 0; i < this.abilityPanels.length; i++) {
      const abilityPanel = this.abilityPanels[i];
      const character = this.characters[i];
      if (character.character.isDead()) {
        info.deadCount += 1;
        continue;
      }
      var wasFound = false;
      for (let iconI = 0; iconI < abilityPanel.abilities.length; iconI++) {
        if (abilityPanel.abilityIcons[iconI].isSelected) {
          const nameBounds = this.characters[i].name.bounds;
          info.abilities.push(abilityPanel.abilities[iconI]);
          info.characterStats.push(this.characters[i].character);
          info.location.push(
            new Point(
              nameBounds.right() + 170.5,
              nameBounds.location.y - 2 + 36
            )
          );
          wasFound = true;
          break;
        }
      }
      if (!wasFound) {
        info.isFinished = false;
        break;
      }
    }
    return info;
  }

  deselectAbilities(canvas) {
    for (let i = 0; i < this.abilityPanels.length; i++) {
      const abilityPanel = this.abilityPanels[i];
      abilityPanel.deselectAbility(canvas);
    }
  }

  render(canvas, deltaTime) {
    for (let i = 0; i < this.characters.length; i++) {
      const character = this.characters[i];
      if (this.selectAbilities && !character.character.isDead()) {
        const abilityPanel = this.abilityPanels[i];
        abilityPanel.render(canvas, deltaTime);
        character.render(canvas, abilityPanel.hasSelectionOrIsHovered());
      } else {
        character.render(canvas, false);
      }
    }
  }

  onMouseDown(point) {
    if (!this.selectAbilities) {
      return;
    }
    for (let i = 0; i < this.abilityPanels.length; i++) {
      if (this.characters[i].character.isDead()) {
        continue;
      }
      this.abilityPanels[i].onMouseDown(point);
    }
  }

  onMouseMove(point) {
    if (!this.selectAbilities) {
      return;
    }
    for (let i = 0; i < this.abilityPanels.length; i++) {
      if (this.characters[i].character.isDead()) {
        continue;
      }
      this.abilityPanels[i].onMouseMove(point);
    }
  }

  onMouseUp(point) {
    if (!this.selectAbilities) {
      return;
    }
    for (let i = 0; i < this.abilityPanels.length; i++) {
      if (this.characters[i].character.isDead()) {
        continue;
      }
      this.abilityPanels[i].onMouseUp(point);
    }
  }
};

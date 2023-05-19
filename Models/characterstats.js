const AttackAbility = require("./Abilities/attackability");

module.exports = class CharacterStats {
  constructor(name, isMainCharacter) {
    this.isMainCharacter = isMainCharacter;
    this.name = name;
    this.power = isMainCharacter ? 35 : 25;
    this.level = 1;
    this.health = 100;
    this.currentHealth = 100;
    this.abilities = [new AttackAbility()];
  }

  isDead() {
    return this.currentHealth <= 0;
  }
};

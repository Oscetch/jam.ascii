const ArtPower = require("./Abilities/artpower");
const AttackAbility = require("./Abilities/attackability");
const BigPaw = require("./Abilities/bigpaw");
const Confuse = require("./Abilities/confuse");
const Defend = require("./Abilities/defend");
const FindWeakness = require("./Abilities/findweakness");
const LazyMimic = require("./Abilities/lazymimic");
const MotivationalSpeach = require("./Abilities/motivationalspeach");
const PetGuardian = require("./Abilities/petguardian");
const PetThePet = require("./Abilities/petthepet");
const Reflect = require("./Abilities/reflect");
const Shield = require("./Abilities/shield");
const Sleep = require("./Abilities/sleep");
const { MIA, MAX, BEN, AVA } = require("./constants");

module.exports = class CharacterStats {
  stunnedUntilTurn = -9999;
  onDamage;

  constructor(name, isMainCharacter) {
    this.isMainCharacter = isMainCharacter;
    this.name = name;
    this.power = isMainCharacter ? 35 : 25;
    this.powerModifier = 1;
    this.damageTakenModifier = 1;
    this.health = 100;
    this.currentHealth = 100;
    this.abilities = [new AttackAbility()];
    switch (name) {
      case MIA:
        this.abilities.push(new PetThePet(), new PetGuardian(), new BigPaw());
        break;
      case MAX:
        this.abilities.push(new Sleep(), new Confuse(), new LazyMimic());
        break;
      case BEN:
        this.abilities.push(new Shield(), new FindWeakness(), new Reflect());
        break;
      case AVA:
        this.abilities.push(
          new Defend(),
          new ArtPower(),
          new MotivationalSpeach()
        );
        break;
    }
  }

  isDead() {
    return this.currentHealth <= 0;
  }
};

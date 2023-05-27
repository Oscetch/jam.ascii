const CharacterStats = require("./../../Models/characterstats");
const { randomInt } = require("../../math/common");
const GameObject = require("../gameobject");
const Sleep = require("../../Models/Abilities/sleep");
const PetThePet = require("../../Models/Abilities/petthepet");
const Shield = require("../../Models/Abilities/shield");
const Defend = require("../../Models/Abilities/defend");
const PetGuardian = require("../../Models/Abilities/petguardian");
const Confuse = require("../../Models/Abilities/confuse");
const FindWeakness = require("../../Models/Abilities/findweakness");
const ArtPower = require("../../Models/Abilities/artpower");
const BigPaw = require("../../Models/Abilities/bigpaw");
const LazyMimic = require("../../Models/Abilities/lazymimic");
const Reflect = require("../../Models/Abilities/reflect");
const MotivationalSpeach = require("../../Models/Abilities/motivationalspeach");

module.exports = class EnemyBase extends GameObject {
  constructor(canvas, name, ascii, minLevel, maxLevel, fontSize = 14) {
    super(ascii, canvas, fontSize);
    this.name = name;
    this.fuel = randomInt(0, 3);
    this.memories = randomInt(0, 2);
    this.stats = new CharacterStats(name, false);
    this.stats.level = randomInt(minLevel, maxLevel + 1);
    const power = this.stats.level * 10 + this.stats.power;
    this.stats.power = randomInt(power * 0.9, power * 1.1);
    const health = 100 * this.stats.level;
    this.stats.health = randomInt(health * 0.9, health * 1.1);
    this.stats.currentHealth = this.stats.health;
  }

  getRandomTier2Ability() {
    const tier2Abilities = [
      new PetThePet(),
      new Sleep(),
      new Shield(),
      new Defend(),
    ];
    return tier2Abilities[randomInt(0, tier2Abilities.length)];
  }

  getRandomTier3Ability() {
    const tier3Abilities = [
      new PetGuardian(),
      new Confuse(),
      new FindWeakness(),
      new ArtPower(),
    ];
    return tier3Abilities[randomInt(0, tier3Abilities.length)];
  }

  getRandomTier4Ability() {
    const tier4Abilities = [
      new BigPaw(),
      new LazyMimic(),
      new Reflect(),
      new MotivationalSpeach(),
    ];
    return tier4Abilities[randomInt(0, tier4Abilities.length)];
  }
};

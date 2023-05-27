const CharacterStats = require("./../../Models/characterstats");
const { randomInt } = require("../../math/common");
const GameObject = require("../gameobject");

module.exports = class EnemyBase extends GameObject {
  constructor(canvas, name, ascii, fontSize = 14) {
    super(ascii, canvas, fontSize);
    this.name = name;
    this.fuel = randomInt(0, 3);
    this.memories = randomInt(0, 2);
    this.stats = new CharacterStats(name, false);
    this.stats.level = randomInt(1, 11);
    const power = this.stats.level * 10 + this.stats.power;
    this.stats.power = randomInt(power * 0.9, power * 1.1);
    const health = 100 * this.stats.level;
    this.stats.health = randomInt(health * 0.9, health * 1.1);
    this.stats.currentHealth = this.stats.health;
  }
};

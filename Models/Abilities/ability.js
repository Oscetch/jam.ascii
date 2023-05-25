const AbilityIconBase = require("../../GameObjects/Battle/Abilities/abilityiconbase");
const CanvasASCII = require("../../canvas_ascii");
const CharacterStats = require("../characterstats");

module.exports = class Ability {
  requiresTarget = true;
  lastUsedRound = -99999;

  /**
   * @param {String} name
   * @param {String} description
   * @param {Number} requiredLevel
   * @param {Number} cooldown
   */
  constructor(name, description, requiredLevel, cooldown) {
    this.name = name;
    this.description = description;
    this.requiredLevel = requiredLevel;
    this.cooldown = cooldown;
  }

  /**
   * @typedef {Object} UseResult
   * @property {CharacterStats[]} targetsHit
   * @property {Number} damage
   * @property {Number} healing
   */

  /**
   * @param {CharacterStats} user
   * @param {CharacterStats[]} team
   * @param {CharacterStats[]} targets
   *
   * @returns {UseResult}
   */
  use(user, team, targets) {
    return {
      targetsHit: [],
      damage: 0,
      healing: 0,
    };
  }

  /**
   *
   * @param {CharacterStats} user
   * @param {CharacterStats} target
   */
  doDamage(user, target) {
    const currentPowerModifier = user.powerModifier;
    const currentDamageTakenModifier = user.damageTakenModifier;
    user.powerModifier = 1;
    user.damageTakenModifier = 1;
    var damage =
      this.getPower(user) * currentPowerModifier * currentDamageTakenModifier;
    if (target.onDamage) {
      damage = target.onDamage(damage, user);
      target.onDamage = null;
    }

    target.currentHealth -= damage;
    return damage;
  }

  /**
   *
   * @param {CharacterStats} user
   * @param {CharacterStats} target
   */
  doHealing(user, target) {
    const currentPowerModifier = user.powerModifier;
    const currentDamageTakenModifier = user.damageTakenModifier;
    user.powerModifier = 1;
    user.damageTakenModifier = 1;
    const damage =
      this.getPower(user) * currentPowerModifier * currentDamageTakenModifier;
    target.currentHealth -= damage;
    return damage;
  }

  /**
   *
   * @param {CanvasASCII} canvas
   * @returns {AbilityIconBase}
   */
  createIcon(canvas, clicked) {}

  getPower(user) {
    return user.power + 10 * user.level;
  }
};

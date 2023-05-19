const AbilityIconBase = require("../../GameObjects/Battle/Abilities/abilityiconbase");
const CanvasASCII = require("../../canvas_ascii");
const CharacterStats = require("../characterstats");

module.exports = class Ability {
  requiresTarget = true;

  constructor(name, description) {
    this.name = name;
    this.description = description;
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
  doDamage(user, target, powerModifier) {
    const damage = user.power * powerModifier;
    target.currentHealth -= damage;
    return damage;
  }

  /**
   *
   * @param {CanvasASCII} canvas
   * @returns {AbilityIconBase}
   */
  createIcon(canvas, clicked) {}
};

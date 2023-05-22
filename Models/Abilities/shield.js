const Ability = require("./ability");
const CharacterStats = require("./../characterstats");
const internalMemory = require("./../internalmemory");
const ShieldIcon = require("../../GameObjects/Battle/Abilities/shieldicon");

module.exports = class Shield extends Ability {
  constructor() {
    super("SHIELD", "SHIELD -> ABSORBS 100% POWER DAMAGE", 3, 1);
  }
  /**
   * @param {CharacterStats} user
   * @param {CharacterStats[]} team
   * @param {CharacterStats[]} targets
   *
   * @returns {UseResult}
   */
  use(user, team, targets) {
    user.onDamage = (damage, attacker) => {
      return Math.max(0, damage - user.power * user.powerModifier);
    };
    user.powerModifier = 1;
    user.damageTakenModifier = 1;

    return {
      targetsHit: [],
      damage: 0,
      healing: 0,
    };
  }

  createIcon(canvas, clicked) {
    return new ShieldIcon(canvas, clicked);
  }
};

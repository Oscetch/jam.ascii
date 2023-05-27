const Ability = require("./ability");
const CharacterStats = require("./../characterstats");
const ReflectIcon = require("../../GameObjects/Battle/Abilities/reflecticon");

module.exports = class Reflect extends Ability {
  constructor() {
    super(
      "REFLECT",
      "REFLECT -> ABSORBS 100% POWER DAMAGE AND REFLECTS IT BACK TO THE ATTACKER",
      7,
      3
    );
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
      attacker.currentHealth -= damage;
      return 0;
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
    return new ReflectIcon(canvas, clicked);
  }
};

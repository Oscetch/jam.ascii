const DefendIcon = require("../../GameObjects/Battle/Abilities/defendicon");
const Ability = require("./ability");

module.exports = class Defend extends Ability {
  constructor() {
    super("DEFEND", "DEFEND -> IF ATTACKED, DOES NOT TAKE DAMAGE", 3, 1);
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
    return new DefendIcon(canvas, clicked);
  }
};

const Ability = require("./ability");
const CharacterStats = require("./../characterstats");
const FindWeaknessIcon = require("../../GameObjects/Battle/Abilities/findweaknessicon");

module.exports = class FindWeakness extends Ability {
  constructor() {
    super("FIND WEAKNESS", "FIND WEAKNESS -> INCREASE POWER BY 200%", 5, 2);
  }
  /**
   * @param {CharacterStats} user
   * @param {CharacterStats[]} team
   * @param {CharacterStats[]} targets
   *
   * @returns {UseResult}
   */
  use(user, team, targets) {
    user.powerModifier += 2;
    user.damageTakenModifier = 1;

    return {
      targetsHit: [],
      damage: 0,
      healing: 0,
    };
  }

  createIcon(canvas, clicked) {
    return new FindWeaknessIcon(canvas, clicked);
  }
};

const Ability = require("./ability");
const CharacterStats = require("./../characterstats");
const ConfuseIcon = require("../../GameObjects/Battle/Abilities/confuseicon");

module.exports = class Confuse extends Ability {
  constructor() {
    super("CONFUSE", "CONFUSE -> ENEMY HAS 25% LESS POWER NEXT ATTACK", 5, 2);
  }
  /**
   * @param {CharacterStats} user
   * @param {CharacterStats[]} team
   * @param {CharacterStats[]} targets
   *
   * @returns {UseResult}
   */
  use(user, team, targets) {
    const target = targets[0];
    target.powerModifier *= 0.75;
    user.powerModifier = 1;
    user.damageTakenModifier = 1;

    return {
      targetsHit: [target],
      damage: 0,
      healing: 0,
    };
  }

  createIcon(canvas, clicked) {
    return new ConfuseIcon(canvas, clicked);
  }
};

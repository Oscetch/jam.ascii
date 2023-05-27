const MotivationalSpeachIcon = require("../../GameObjects/Battle/Abilities/motiviationalspeachicon");
const Ability = require("./ability");

module.exports = class MotivationalSpeach extends Ability {
  constructor() {
    super(
      "MOTIVATIONAL SPEACH",
      "MOTIVATIONAL SPEACH -> EVERYONE GAINS 50% POWER",
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
    user.powerModifier = 1;
    user.damageTakenModifier = 1;
    for (let i = 0; i < team.length; i++) {
      team[i].powerModifier += 0.5;
    }

    return {
      targetsHit: [],
      damage: 0,
      healing: 0,
    };
  }

  createIcon(canvas, clicked) {
    return new MotivationalSpeachIcon(canvas, clicked);
  }
};

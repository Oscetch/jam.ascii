const MotivationalSpeachIcon = require("../../GameObjects/Battle/Abilities/motiviationalspeachicon");
const Ability = require("./ability");

module.exports = class MotivationalSpeach extends Ability {
  constructor() {
    super(
      "MOTIVATIONAL SPEACH",
      "MOTIVATIONAL SPEACH -> IF HE IS ATTACKED, THE DAMAGE THAT WOULD HAVE INFLICTED HIM IS DONE TO THE ENEMY INSTEAD",
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
    user.onDamage = (damage, target) => {
      target.currentHealth -= damage * 2;
      return 0;
    };

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

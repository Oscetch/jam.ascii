const Ability = require("./ability");

module.exports = class Stampede extends Ability {
  constructor() {
    super("STAMPEDE", "STAMPEDE -> 300% POWER DAMAGE", 0, 9999);
  }

  use(user, team, targets) {
    const target = targets[0];

    user.powerModifier += 3;
    return {
      targetsHit: [target],
      damage: this.doDamage(user, target),
      healing: 0,
    };
  }
};

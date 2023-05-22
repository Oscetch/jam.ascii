const BigPawIcon = require("../../GameObjects/Battle/Abilities/bigpawicon");
const Ability = require("./ability");

module.exports = class BigPaw extends Ability {
  constructor() {
    super("BIG PAW", "BIG PAW -> 200% POWER DAMAGE", 7, 3);
  }

  use(user, team, targets) {
    const target = targets[0];

    user.powerModifier += 2;
    return {
      targetsHit: [target],
      damage: this.doDamage(user, target),
      healing: 0,
    };
  }

  createIcon(canvas, clicked) {
    return new BigPawIcon(canvas, clicked);
  }
};

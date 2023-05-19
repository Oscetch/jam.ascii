const AttackAbilityIcon = require("../../GameObjects/Battle/Abilities/attackabilityicon");
const Ability = require("./ability");

module.exports = class AttackAbility extends Ability {
  constructor() {
    super("Attack", "Attack -> 100% power damage");
  }

  use(user, team, targets) {
    const target = targets[0];

    return {
      targetsHit: [target],
      damage: this.doDamage(user, target, 1),
      healing: 0,
    };
  }

  createIcon(canvas, clicked) {
    return new AttackAbilityIcon(canvas, clicked);
  }
};

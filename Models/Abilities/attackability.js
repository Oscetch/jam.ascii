const AttackAbilityIcon = require("../../GameObjects/Battle/Abilities/attackabilityicon");
const Ability = require("./ability");

module.exports = class AttackAbility extends Ability {
  constructor() {
    super("ATTACK", "ATTACK -> 100% power damage", 0, 0);
  }

  use(user, team, targets) {
    const target = targets[0];
    return {
      targetsHit: [target],
      damage: this.doDamage(user, target),
      healing: 0,
    };
  }

  createIcon(canvas, clicked) {
    return new AttackAbilityIcon(canvas, clicked);
  }
};

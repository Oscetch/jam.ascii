const PetGuardianIcon = require("../../GameObjects/Battle/Abilities/petguardianicon");
const Ability = require("./ability");

module.exports = class PetGuardian extends Ability {
  constructor() {
    super("PET GUARDIAN", "PET GUARDIAN -> TAKE 50% LESS DAMAGE", 5, 2);
  }

  use(user, team, targets) {
    user.damageTakenModifier = 0.5;
    return {
      targetsHit: [],
      damage: 0,
      healing: 0,
    };
  }

  createIcon(canvas, clicked) {
    return new PetGuardianIcon(canvas, clicked);
  }
};

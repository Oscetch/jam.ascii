const PetThePetIcon = require("../../GameObjects/Battle/Abilities/petthepeticon");
const CharacterStats = require("../characterstats");
const Ability = require("./ability");

module.exports = class PetThePet extends Ability {
  constructor() {
    super("PET THE PET", "PET THE PET -> INCREASES POWER BY 50%", 3, 1);
  }

  /**
   * @param {CharacterStats} user
   * @param {CharacterStats[]} team
   * @param {CharacterStats[]} targets
   * @returns
   */
  use(user, team, targets) {
    user.powerModifier = 1;
    user.damageTakenModifier = 1;
    user.powerModifier += 0.5;
    return {
      targetsHit: [],
      damage: 0,
      healing: 0,
    };
  }

  createIcon(canvas, clicked) {
    return new PetThePetIcon(canvas, clicked);
  }
};

const ArtPowerIcon = require("../../GameObjects/Battle/Abilities/artpowericon");
const Ability = require("./ability");

module.exports = class ArtPower extends Ability {
  constructor() {
    super("ART POWER", "ART POWER -> DO 150% POWER DAMAGE", 5, 2);
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
    user.powerModifier += 1.5;
    return {
      targetsHit: [target],
      damage: this.doDamage(user, target),
      healing: 0,
    };
  }

  createIcon(canvas, clicked) {
    return new ArtPowerIcon(canvas, clicked);
  }
};

const SleepIcon = require("../../GameObjects/Battle/Abilities/sleepicon");
const Ability = require("./ability");
const CharacterStats = require("./../characterstats");
const internalMemory = require("./../internalmemory");

module.exports = class AttackAbility extends Ability {
  constructor() {
    super(
      "SLEEP",
      "SLEEP -> HEALS FOR 50% POWER, BUT YOU'RE STUNNED THE NEXT TURN",
      3,
      1
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
    const healingDone = this.getPower(user) * user.powerModifier * 0.5;
    user.currentHealth = Math.min(
      user.health,
      user.currentHealth + healingDone
    );
    user.powerModifier = 1;
    user.damageTakenModifier = 1;

    user.stunnedUntilTurn = internalMemory.currentRound + 2;
    return {
      targetsHit: [user],
      damage: 0,
      healing: healingDone,
    };
  }

  createIcon(canvas, clicked) {
    return new SleepIcon(canvas, clicked);
  }
};

const LazyMimicIcon = require("../../GameObjects/Battle/Abilities/lazymimicicon");
const { randomInt } = require("../../math/common");
const Ability = require("./ability");
const BigPaw = require("./bigpaw");
const MotivationalSpeach = require("./motivationalspeach");
const Reflect = require("./reflect");

module.exports = class LazyMimic extends Ability {
  #abilities = [new MotivationalSpeach(), new Reflect(), new BigPaw()];

  constructor() {
    super("LAZY MIMIC", "LAZY MIMIC -> RANDOM 4TH TIER ABILITY", 7, 3);
  }
  /**
   * @param {CharacterStats} user
   * @param {CharacterStats[]} team
   * @param {CharacterStats[]} targets
   *
   * @returns {UseResult}
   */
  use(user, team, targets) {
    return this.#abilities[randomInt(0, this.#abilities.length)].use(
      user,
      team,
      targets
    );
  }

  createIcon(canvas, clicked) {
    return new LazyMimicIcon(canvas, clicked);
  }
};

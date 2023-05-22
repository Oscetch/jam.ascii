const AbilityIconBase = require("./abilityiconbase");

module.exports = class PetGuardianIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(canvas, `◙\n`, 10, clicked);
  }
};

const AbilityIconBase = require("./abilityiconbase");

module.exports = class AttackAbilityIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(canvas, `◙\n`, 10, clicked);
  }
};

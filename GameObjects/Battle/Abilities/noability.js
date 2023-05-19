const AbilityIconBase = require("./abilityiconbase");

module.exports = class NoAbility extends AbilityIconBase {
  constructor(canvas) {
    super(canvas, "?", 10, () => {});
    this.regularColor = "#414141";
    this.hoverColor = "#414141";
  }
};

const AbilityIconBase = require("./abilityiconbase");

module.exports = class NoAbility extends AbilityIconBase {
  constructor(canvas) {
    super(canvas, "?", 10, () => {});
    this.regularColor = "#FFFFFF";
    this.hoverColor = "#FFFFFF";
  }
};

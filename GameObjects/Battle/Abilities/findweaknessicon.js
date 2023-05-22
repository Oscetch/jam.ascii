const AbilityIconBase = require("./abilityiconbase");

module.exports = class FindWeaknessIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(
      canvas,
      `Û
Û`,
      14,
      clicked
    );
  }
};

const AbilityIconBase = require("./abilityiconbase");

module.exports = class ReflectIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(
      canvas,
      `◣╯

◤╮`,
      12,
      clicked
    );
  }
};

const AbilityIconBase = require("./abilityiconbase");

module.exports = class LazyMimicIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(
      canvas,
      `◢
◢◙◢
◢`,
      12,
      clicked
    );
  }
};

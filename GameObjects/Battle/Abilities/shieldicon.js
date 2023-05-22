const AbilityIconBase = require("./abilityiconbase");

module.exports = class ShieldIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(
      canvas,
      `Û ÛÛ Û
ÛÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛÛ
 ÛÛÛÛ
  ÛÛ`,
      6,
      clicked
    );
  }
};

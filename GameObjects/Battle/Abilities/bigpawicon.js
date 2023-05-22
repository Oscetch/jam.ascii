const AbilityIconBase = require("./abilityiconbase");

module.exports = class BigPawIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(
      canvas,
      `  Û Û
Û Û Û Û
Û     Û
  ÛÛÛ
 ÛÛÛÛÛ
 ÛÛÛÛÛ
 Û   Û`,
      4,
      clicked
    );
  }
};

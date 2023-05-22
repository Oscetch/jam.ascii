const AbilityIconBase = require("./abilityiconbase");

module.exports = class PetThePetIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(
      canvas,
      `◢ Û ◣
  ◥Û◤
   Û
Û  Û  Û
◥ÛÛÛÛÛ◤`,
      4,
      clicked
    );
  }
};

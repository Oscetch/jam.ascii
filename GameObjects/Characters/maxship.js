const CharacterBase = require("./characterbase");

module.exports = class MaxShip extends CharacterBase {
  constructor(canvas) {
    super(
      `           ◢ÛÛÛ◣
          ◢ÛÛ◤ ◥◣ 
          ÛÛÛ Û Û
◥ÛÛÛ◣     ÛÛÛÛ◤ Û    ◢ÛÛÛ◤
 ◥ÛÛÛ◣    ÛÛÛÛ ◢Û   ◢ÛÛÛ◤
  ÛÛÛÛ◣   ÛÛÛÛÛÛÛ  ◢ÛÛÛÛ
  ◥ÛÛÛÛÛ◣ ÛÛÛÛ ÛÛ ◢ÛÛÛÛ◤
  ◢ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ◣
 ◢ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ◣
◢◣
◥ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ◤
 ◥ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ◤
  ◥ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ◤`,
      canvas,
      4
    );
  }
};

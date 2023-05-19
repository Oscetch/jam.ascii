const CharacterBase = require("./characterbase");

module.exports = class MiaShip extends CharacterBase {
  constructor(canvas) {
    super(
      `           ◢ÛÛÛ◣
          ◢ÛÛÛÛÛ◣ 
          ÛÛÛÛ ÛÛ
◥ÛÛÛ◣     ÛÛÛ Û Û    ◢ÛÛÛ◤
 ◥ÛÛÛ◣    ÛÛÛÛ ÛÛ   ◢ÛÛÛ◤
  ÛÛÛÛ◣   ÛÛÛ   Û  ◢ÛÛÛÛ
  ◥ÛÛÛÛÛ◣ ÛÛÛÛÛÛÛ ◢ÛÛÛÛ◤
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

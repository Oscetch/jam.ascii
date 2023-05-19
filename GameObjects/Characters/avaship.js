const CharacterBase = require("./characterbase");

module.exports = class AvaShip extends CharacterBase {
  constructor(canvas) {
    super(
      `           ◢ÛÛÛ◣
          ◢ÛÛÛ Û◣ 
          ÛÛÛ   Û
◥ÛÛÛ◣     ÛÛ         ◢ÛÛÛ◤
 ◥ÛÛÛ◣    ÛÛÛ   Û   ◢ÛÛÛ◤
  ÛÛÛÛ◣   ÛÛÛÛ ÛÛ  ◢ÛÛÛÛ
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

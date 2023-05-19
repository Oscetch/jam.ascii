const CharacterBase = require("./characterbase");

module.exports = class BenShip extends CharacterBase {
  constructor(canvas) {
    super(
      `           ◢ÛÛ Û◣
          ◢ÛÛ   Û◣ 
          ÛÛ     Û 
◥ÛÛÛ◣     Û          ◢ÛÛÛ◤
 ◥ÛÛÛ◣    Û         ◢ÛÛÛ◤
  ÛÛÛÛ◣   ÛÛÛ   ÛÛ ◢ÛÛÛÛ
  ◥ÛÛÛÛÛ◣ ÛÛ     Û◢ÛÛÛÛ◤
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

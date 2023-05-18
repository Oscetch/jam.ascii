const CharacterBase = require("./characterbase");

module.exports = class Max extends CharacterBase {
  constructor(canvas) {
    super(
      `Û  ◢Û◣  Û
ÛÛÛÛÛÛÛÛ
 ◢◤   ◥◣
 Û Å Å◤
 ◥    
  ◣  ╯ 
  ◥ÛÛ◤
    `,
      canvas
    );
  }
};

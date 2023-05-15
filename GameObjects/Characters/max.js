const GameObject = require("../gameobject");

module.exports = class Max extends GameObject {
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
      canvas,
      12
    );
  }
};

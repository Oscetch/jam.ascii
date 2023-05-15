const GameObject = require("../gameobject");

module.exports = class Mia extends GameObject {
  constructor(canvas) {
    super(
      ` ◢ÛÛÛ◣
◢Û◤◤◥Û◣
◤   ◥Û
Û Þ Þ Û
Û     
◥◣  ╯◢◤
 ÛÛÛÛ
   `,
      canvas,
      12
    );
  }
};

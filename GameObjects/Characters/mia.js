const CharacterBase = require("./characterbase");

module.exports = class Mia extends CharacterBase {
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
      canvas
    );
  }
};

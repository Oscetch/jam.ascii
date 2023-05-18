const CharacterBase = require("./characterbase");

module.exports = class Ava extends CharacterBase {
  constructor(canvas) {
    super(
      ` ▞ÛÛ▙
  ÛÛÛÛ▙
 ▟Û   ▜▙
▞ÛÛ Þ Þ▚
 ÛÛ    
 ▜Û◣  ╯◢
²ÛÛÛÛÛ◤
     `,
      canvas
    );
  }
};

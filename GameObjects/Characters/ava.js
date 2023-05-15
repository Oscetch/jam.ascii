const GameObject = require("../gameobject");

module.exports = class Ava extends GameObject {
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
      canvas,
      12
    );
  }
};

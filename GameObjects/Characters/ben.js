const GameObject = require("../gameobject");

module.exports = class Ben extends GameObject {
  constructor(canvas) {
    super(
      ` 
ÛÛÛÛÛ
Û   ◥
▎▗ ▗
▎.  
▎  Ù
◥ÛÛ◤
  `,
      canvas,
      12
    );
  }
};

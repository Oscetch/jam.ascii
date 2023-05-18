const CharacterBase = require("./characterbase");

module.exports = class Ben extends CharacterBase {
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
      canvas
    );
  }
};

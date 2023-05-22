const AbilityIconBase = require("./abilityiconbase");

module.exports = class DefendIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(
      canvas,
      `   
   
Û    
ÛÛ      Û
 ÛÛ    Û
 ÛÛÛ  ÛÛ
  ÛÛÛÛÛ
   ÛÛÛ
    Û`,
      4,
      clicked
    );
  }
};

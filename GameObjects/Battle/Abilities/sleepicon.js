const AbilityIconBase = require("./abilityiconbase");

module.exports = class SleepIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(
      canvas,
      `   ÛÛ  Û
  ÛÛ  
 ÛÛ   
 ÛÛ  Û 
 ÛÛ
  ÛÛ   Û
   ÛÛ`,
      4,
      clicked
    );
  }
};

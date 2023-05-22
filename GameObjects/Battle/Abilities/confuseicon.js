const AbilityIconBase = require("./abilityiconbase");

module.exports = class ConfuseIcon extends AbilityIconBase {
  constructor(canvas, clicked) {
    super(
      canvas,
      ` Û 
 ÛÛ
Û Û
  Û
 Û 
   
 Û `,
      4,
      clicked
    );
  }
};

const EnemyBase = require("./enemybase");

module.exports = class WarpDemon extends EnemyBase {
  constructor(canvas) {
    super(
      canvas,
      "Warp Daemon",
      `  ÛÛÛÛÛÛÛ 
  ÛÛÛÛÛ  

  Û u  Û  
  Û    Û 
  ÛÛÛÛÛÛÛ 
 ÛÛ
   ÛÛÛ   
    Û Û 
       `,
      7,
      10,
      16
    );
    this.stats.abilities.push(this.getRandomTier2Ability());
    this.stats.abilities.push(this.getRandomTier3Ability());
    this.stats.abilities.push(this.getRandomTier4Ability());
  }
};

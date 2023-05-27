const EnemyBase = require("./enemybase");

module.exports = class PlanetaryBehemoth extends EnemyBase {
  constructor(canvas) {
    super(
      canvas,
      "Planetary Behemoth",
      `      
 Û ÛÛÛ Û
 ÛÛ    ◥ÛÛ 
 * * 
 ÛÛ *  ÛÛ 
 ÛÛ    ÛÛ
  ÛÛÛÛÛ 
   
  ÛÛÛÛÛ  
   ÛÛÛÛÛ
    ÛÛ`,
      5,
      7,
      16
    );
    this.stats.abilities.push(this.getRandomTier2Ability());
    this.stats.abilities.push(this.getRandomTier3Ability());
  }
};

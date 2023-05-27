const EnemyBase = require("./enemybase");

module.exports = class SpaceKraken extends EnemyBase {
  constructor(canvas) {
    super(
      canvas,
      "Space Kraken",
      `    ²ÛÛÛ◣
    ÛÛÛÛÛ◣
²ÛÛÛÛ   ◥ÛÛÛ²
   Û▎ Û
²ÛÛÛÛ▎ Ü ÛÛ²
   Û▎   
²ÛÛÛÛÛÛÛÛÛÛÛÛ²
     ÛÛÛ
     Û Û Û
     Û Û Û
     ² ² ²`,
      3,
      5
    );
    this.stats.abilities.push(this.getRandomTier2Ability());
  }
};

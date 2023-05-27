const EnemyBase = require("./enemybase");

module.exports = class AsteroidSpider extends EnemyBase {
  constructor(canvas) {
    super(
      canvas,
      "Asteroid Spider",
      `          
        
        
    Û   
    Û◙Û  
~~~Û◙Û◙Û~~~
    ÛÛÛ  
    Û  
        
        
       `,
      1,
      3,
      16
    );
  }
};

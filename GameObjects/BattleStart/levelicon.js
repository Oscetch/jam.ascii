const GameObject = require("../gameobject");

module.exports = class LevelIcon extends GameObject {
  constructor(canvas) {
    super(
      `  ÛÛ
 ÛÛÛÛ
ÛÛÛÛÛÛ
  ÛÛ
  ÛÛ 
  ÛÛ 
  ÛÛ`,
      canvas,
      2
    );
  }
};

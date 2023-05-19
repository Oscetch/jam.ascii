const GameObject = require("../gameobject");

module.exports = class PlanetIcon extends GameObject {
  constructor(canvas) {
    super(
      `    ÛÛÛ
  ÛÛÛÛÛÛÛ
 ÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛ
 ÛÛÛÛÛÛÛÛÛ
  ÛÛÛÛÛÛÛ
    ÛÛÛ`,
      canvas,
      1
    );
  }
};

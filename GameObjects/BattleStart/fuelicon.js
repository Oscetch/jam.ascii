const GameObject = require("../gameobject");

module.exports = class FuelIcon extends GameObject {
  constructor(canvas) {
    super(
      `     Û
    ÛÛÛ
   ÛÛÛÛÛ
  ÛÛÛÛÛÛÛ
 ÛÛÛÛÛÛÛÛÛ
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

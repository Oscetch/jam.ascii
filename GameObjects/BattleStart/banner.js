const GameObject = require("../gameobject");

module.exports = class Banner extends GameObject {
  constructor(canvas) {
    super(
      `ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
 ÛÛÛ
  Û`,
      canvas,
      17
    );
  }
};

const GameObject = require("../gameobject");

module.exports = class MemoryIcon extends GameObject {
  constructor(canvas) {
    super(
      `  ÛÛ  Û  Û  ÛÛ
  ÛÛ  Û  Û  ÛÛ
  ÛÛ  Û  Û  ÛÛ
  ÛÛ  Û  Û  ÛÛ
 ÛÛÛÛÛÛÛÛÛÛÛÛÛ
 ÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ`,
      canvas,
      1
    );
  }
};

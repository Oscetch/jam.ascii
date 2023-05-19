const GameObject = require("../gameobject");

module.exports = class AbilityChoiceBackground extends GameObject {
  constructor(canvas) {
    super(
      `ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ
ÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛÛ`,
      canvas,
      12
    );
  }
};

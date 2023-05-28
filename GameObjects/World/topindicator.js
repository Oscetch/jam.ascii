const Point = require("../../math/point");
const GameObject = require("../gameobject");

module.exports = class TopIndicator extends GameObject {
  shouldShow = false;

  constructor(canvas) {
    super(
      `  ÛÛÛÛÛ ÛÛÛÛÛ
 ÛÛÛÛÛ   ÛÛÛÛÛ
ÛÛÛÛÛ     ÛÛÛÛÛ
 ÛÛÛÛÛÛ ÛÛÛÛÛÛ
  ÛÛÛÛÛ ÛÛÛÛÛ`,
      canvas,
      4
    );
    this.bounds.location = new Point(370, 80);
    this.color = "#FFFFFF";
  }

  render(canvas) {
    if (this.shouldShow) {
      super.render(canvas);
    }
  }
};

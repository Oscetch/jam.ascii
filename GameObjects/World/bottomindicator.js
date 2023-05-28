const Point = require("../../math/point");
const GameObject = require("../gameobject");

module.exports = class BottomIndicator extends GameObject {
  shouldShow = false;

  constructor(canvas) {
    super(
      `  ÛÛÛÛÛ ÛÛÛÛÛ
 ÛÛÛÛÛÛ ÛÛÛÛÛÛ
ÛÛÛÛÛ     ÛÛÛÛÛ
 ÛÛÛÛÛ   ÛÛÛÛÛ
  ÛÛÛÛÛ ÛÛÛÛÛ`,
      canvas,
      4
    );
    this.bounds.location = new Point(373, 604);
    this.color = "#FFFFFF";
  }

  render(canvas) {
    if (this.shouldShow) {
      super.render(canvas);
    }
  }
};

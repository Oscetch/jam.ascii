const Point = require("../../math/point");
const GameObject = require("../gameobject");

module.exports = class LeftIndicator extends GameObject {
  shouldShow = false;

  constructor(canvas) {
    super(
      `  Û
 ÛÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
ÛÛ ÛÛ
Û  ÛÛ
     
Û  ÛÛ
ÛÛ ÛÛ
ÛÛÛÛÛ
ÛÛÛÛÛ
 ÛÛÛ
  Û `,
      canvas,
      4
    );
    this.bounds.location = new Point(16, 274);
    this.color = "#FFFFFF";
  }

  render(canvas) {
    if (this.shouldShow) {
      super.render(canvas);
    }
  }
};

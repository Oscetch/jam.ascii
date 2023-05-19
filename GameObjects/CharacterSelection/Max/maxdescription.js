var GameObject = require("../../gameobject");
var Point = require("./../../../math/point");

module.exports = class MaxDescription extends GameObject {
  constructor(canvas) {
    super(
      `Max is a laid-back guy who
tries not to take things too
seriously. 

He is very adaptable and can
handle high-stress situations 
well`,
      canvas,
      14
    );
    this.bounds.location = new Point(150, 481);
    this.color = "#FFFFFF";
    this.lineHeight = 7;
  }
};

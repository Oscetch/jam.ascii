const GameObject = require("../gameobject");

module.exports = class CardClickBackground extends GameObject {
  constructor(canvas) {
    super(
      `²  ²
  ²²² ²² 
 ²²²²²²²²²
 ²²²²²²²²²²²²
  ²² ²²²
²²  `,
      canvas,
      24
    );
    this.color = "#AC91F8";
  }
};

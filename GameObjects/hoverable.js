var GameObject = require("./gameobject");

module.exports = class Hoverable extends GameObject {
  hoverColor = "#AC91F8";
  regularColor = "#000000";

  constructor(ascii, canvas, fontSize = 13) {
    super(ascii, canvas, fontSize);
    this.mouseListener = true;
  }

  update(canvas, deltaTime) {
    if (this.isMouseOver) {
      this.color = this.hoverColor;
    } else {
      this.color = this.regularColor;
    }
  }
};

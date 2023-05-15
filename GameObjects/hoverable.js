var GameObject = require("./gameobject");

module.exports = class Hoverable extends GameObject {
  hoverColor = "#5722EE";
  regularColor = "#000000";

  constructor(ascii, canvas, fontSize = 20) {
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

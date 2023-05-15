const GameObject = require("./../gameobject");
const Hoverable = require("./../hoverable");
const Point = require("./../../math/point");

module.exports = class SelectButton extends Hoverable {
  constructor(canvas, clicked) {
    const ascii = `
▎ SELECT 
▂▂▂▂▂▂▂▂`;
    super(ascii, canvas);
    this.hoverColor = "#5722EE";
    this.regularColor = "#FFFFFF";
    this.bounds.location = new Point(1120, 825);
    this.clicked = clicked;
  }

  onClicked() {
    this.clicked();
  }
};

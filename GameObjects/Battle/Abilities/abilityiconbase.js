const GameObject = require("../../gameobject");
const Hoverable = require("../../hoverable");

module.exports = class AbilityIconBase extends Hoverable {
  isSelected = false;

  constructor(canvas, iconAscii, iconFontSize, clicked) {
    super(
      `
▎   
▎   
▎   
▂▂▂`,
      canvas,
      8
    );
    this.icon = new GameObject(iconAscii, canvas, iconFontSize);
    this.icon.bounds.centerOn(this.bounds);
    this.regularColor = "#FFFFFF";
    this.clicked = clicked;
  }

  render(canvas) {
    super.render(canvas);
    this.icon.render(canvas);
  }

  update(canvas, deltaTime) {
    if (this.isSelected) {
      this.color = this.hoverColor;
    } else {
      super.update(canvas, deltaTime);
    }
    this.icon.bounds = this.icon.bounds.centerOn(this.bounds);
    this.icon.color = this.color;
  }

  onClicked() {
    this.clicked();
  }
};

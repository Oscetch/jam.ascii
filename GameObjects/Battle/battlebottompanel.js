const GameObject = require("../gameobject");
const BattleAbilityInfoBackground = require("./battleabilityinfobackground");

const maxWidth = 800 - 48 * 2;

module.exports = class BattleBottomPanel {
  constructor(canvas) {
    this.background = new BattleAbilityInfoBackground(canvas);
    this.text = new GameObject("", canvas, 16);
    this.text.bounds.location.x = 48;
    this.text.color = "#FFFFFF";
  }

  render(canvas, text) {
    this.text.setFontSize(16, canvas);
    this.text.updateBackingArray(canvas, [text]);
    const percent = maxWidth / this.text.bounds.size.x;
    if (percent < 1) {
      this.text.setFontSize(Math.max(1, Math.floor(16 * percent)), canvas);
    }
    this.background.render(canvas);
    this.text.bounds = this.text.bounds.centerY(this.background.bounds);
    this.text.render(canvas);
  }
};

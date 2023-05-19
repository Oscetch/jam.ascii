const GameObject = require("../gameobject");
const BattleAbilityInfoBackground = require("./battleabilityinfobackground");

module.exports = class BattleBottomPanel {
  constructor(canvas) {
    this.background = new BattleAbilityInfoBackground(canvas);
    this.text = new GameObject("", canvas, 16);
    this.text.bounds.location.x = 48;
    this.text.color = "#FFFFFF";
  }

  render(canvas, text) {
    this.text.updateBackingArray(canvas, [text]);
    this.background.render(canvas);
    this.text.bounds = this.text.bounds.centerY(this.background.bounds);
    this.text.render(canvas);
  }
};

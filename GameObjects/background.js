var GameObject = require("./gameobject");

module.exports = class Background extends GameObject {
  constructor(overlay, canvas, fontSize = 20) {
    let maxWidth = 0;
    let ascii = "";
    for (let i = 0; i < overlay.backingArray.length; i++) {
      maxWidth = Math.max(overlay.backingArray[i].length, maxWidth);
    }
    for (let i = 0; i < overlay.backingArray.length; i++) {
      for (let x = 0; x < maxWidth; x++) {
        ascii += "²";
      }
      ascii += "\n";
    }
    super(ascii, canvas, fontSize);
    this.color = "#FFFFFF";
  }
};

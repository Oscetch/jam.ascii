const Hoverable = require("./hoverable");

module.exports = class Button extends Hoverable {
  constructor(text, canvas, clicked, fontSize = 13) {
    const topStart = "";
    const topEnd = "\n";
    const topFill = "";
    const middleStart = "▎ ";
    const middleEnd = " \n";
    const bottomStart = "▂";
    const bottomEnd = "▂";
    const bottomFill = "▂";
    var ascii = topStart;
    for (let i = 0; i < text.length; i++) {
      ascii += topFill;
    }
    ascii += topEnd + middleStart + text + middleEnd + bottomStart;
    for (let i = 0; i < text.length; i++) {
      ascii += bottomFill;
    }
    ascii += bottomEnd;
    super(ascii, canvas, fontSize);

    this.clicked = clicked;
  }

  onClicked() {
    this.clicked();
  }
};

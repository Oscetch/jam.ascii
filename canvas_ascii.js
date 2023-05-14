class CanvasASCII {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = 1440;
    this.canvas.height = 1024;
    this.ctx = canvas.getContext("2d");
    this.charWidth = 10;
    this.charHeight = 20;
    this.ctx.font = '20px "C64 Pro Mono"';
    this.ctx.textAlign = "left";
    this.ctx.textBaseline = "top";
  }

  setCharSize(width, height) {
    this.charWidth = width;
    this.charHeight = height;
    this.ctx.font = `${this.fontSize}px ${this.font}`;
  }

  setFontSize(fontSize) {
    this.fontSize = fontSize;
    this.ctx.font = `${this.fontSize}px ${this.font}`;
  }

  setFontColor(color) {
    this.ctx.fillStyle = color;
  }

  drawChar(char, x, y) {
    this.ctx.fillText(
      char,
      x * this.charWidth,
      y * this.charHeight + this.fontSize
    );
  }

  drawText(text, x, y) {
    this.ctx.fillText(
      text,
      x * this.charWidth,
      y * this.charHeight + this.fontSize
    );
  }

  drawTexts(texts, x, y) {
    let yOffset = 0;
    for (let i = 0; i < texts.length; i++) {
      const text = texts[i];
      this.ctx.fillText(text, x, y + yOffset);
      const measurement = this.ctx.measureText(text);
      yOffset +=
        measurement.actualBoundingBoxAscent +
        measurement.actualBoundingBoxDescent;
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

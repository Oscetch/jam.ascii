const Point = require("./math/point");

module.exports = class CanvasASCII {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = 800;
    this.canvas.height = 640;
    this.ctx = canvas.getContext("2d");
    this.charWidth = 10;
    this.charHeight = 20;
    this.font = '"C64 Pro Mono"';
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
      if (text.length === 0) {
        yOffset += measurement.actualBoundingBoxDescent;
      } else {
        yOffset +=
          measurement.actualBoundingBoxAscent +
          measurement.actualBoundingBoxDescent;
      }
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  registerMouseMoveEvent(onMove) {
    this.canvas.onmousemove = function (event) {
      var rect = this.canvas.getBoundingClientRect();
      var mouseX = event.clientX - rect.left;
      var mouseY = event.clientY - rect.top;
      onMove(new Point(mouseX, mouseY));
    }.bind(this);
  }

  registerMouseDownEvent(onMouseDown) {
    this.canvas.onmousedown = function (event) {
      var rect = this.canvas.getBoundingClientRect();
      var mouseX = event.clientX - rect.left;
      var mouseY = event.clientY - rect.top;
      onMouseDown(new Point(mouseX, mouseY));
    }.bind(this);
  }

  registerMouseUpEvent(onMouseUp) {
    this.canvas.onmouseup = function (event) {
      var rect = this.canvas.getBoundingClientRect();
      var mouseX = event.clientX - rect.left;
      var mouseY = event.clientY - rect.top;
      onMouseUp(new Point(mouseX, mouseY));
    }.bind(this);
  }
};

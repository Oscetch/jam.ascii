const Point = require("./../math/point");
const Rectangle = require("./../math/rectangle");
const CanvasASCII = require("./../canvas_ascii");

module.exports = class GameObject {
  backingArray;
  color = "#000000";
  isClicked = false;
  isMouseOver = false;
  mouseListener = false;
  bounds;
  #fontSize;

  /**
   * @param {String} ascii
   * @param {CanvasASCII} canvas
   * @param {Number} fontSize
   */
  constructor(ascii, canvas, fontSize = 20) {
    this.#fontSize = fontSize;
    canvas.setFontSize(this.#fontSize);
    this.backingArray = ascii.split("\n");
    this.bounds = this.getBounds(this.backingArray, canvas);
  }

  setFontSize(size, canvas) {
    this.#fontSize = size;
    canvas.setFontSize(this.#fontSize);
    this.bounds = this.getBounds(
      this.backingArray,
      canvas,
      this.bounds.location
    );
  }

  onMouseMove(point) {
    this.isMouseOver = this.bounds.containsPoint(point);
  }
  onMouseDown(point) {
    if (!this.isClicked && this.bounds.containsPoint(point)) {
      this.isClicked = true;
    }
  }
  onMouseUp(point) {
    if (this.isClicked && this.bounds.containsPoint(point)) {
      this.onClicked();
    }
    this.isClicked = false;
  }

  onClicked() {}

  /**
   * @param {CanvasASCII} canvas
   * @param {Number} deltaTime
   */
  update(canvas, deltaTime) {}

  render(canvas) {
    canvas.setFontSize(this.#fontSize);
    canvas.setFontColor(this.color);
    let center = this.bounds.location;
    canvas.drawTexts(this.backingArray, center.x, center.y);
  }
  renderTranslated(canvas, offset) {
    canvas.setFontSize(this.#fontSize);
    canvas.setFontColor(this.color);
    let center = this.bounds.location.subtract(offset);
    canvas.drawTexts(this.backingArray, center.x, center.y);
  }

  /**
   * @param {String[]} arr
   * @param {CanvasASCII} canvas
   * @param {Point} location
   * @returns {Rectangle}
   */
  getBounds(arr, canvas, location = new Point()) {
    let width = 0;
    let height = 0;
    for (let i = 0; i < arr.length; i++) {
      let measurement = canvas.ctx.measureText(arr[i]);
      height +=
        measurement.actualBoundingBoxAscent +
        measurement.actualBoundingBoxDescent;
      width = Math.max(
        width,
        measurement.actualBoundingBoxRight + measurement.actualBoundingBoxLeft
      );
    }
    return new Rectangle(location, new Point(width, height));
  }
};

const Point = require("./../math/point");
const Rectangle = require("./../math/rectangle");
const CanvasASCII = require("./../canvas_ascii");

module.exports = class GameObject {
  backingArray;
  color = "#000000";
  isClicked = false;
  isMouseOver = false;
  mouseListener = false;
  flip = false;
  bounds;
  fontSize;
  rotation = 0;
  lineHeight = 0;

  /**
   * @param {String} ascii
   * @param {CanvasASCII} canvas
   * @param {Number} fontSize
   */
  constructor(ascii, canvas, fontSize = 14) {
    this.fontSize = fontSize;
    canvas.setFontSize(this.fontSize);
    this.backingArray = ascii.split("\n");
    this.bounds = this.getBounds(this.backingArray, canvas);
  }

  /**
   * @param {CanvasASCII} canvas
   * @param {String[]} arr
   */
  updateBackingArray(canvas, arr) {
    canvas.setFontSize(this.fontSize);
    this.backingArray = arr;
    this.bounds = this.getBounds(arr, canvas, this.bounds.location);
  }

  setFontSize(size, canvas) {
    this.fontSize = size;
    canvas.setFontSize(this.fontSize);
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
    this.renderTranslated(canvas, new Point());
  }
  /**
   *
   * @param {CanvasASCII} canvas
   * @param {Point} offset
   */
  renderTranslated(canvas, offset) {
    canvas.ctx.save();
    canvas.setFontSize(this.fontSize);
    canvas.setFontColor(this.color);
    let offsetLocation = this.bounds.location.subtract(offset);
    if (this.flip) {
      canvas.ctx.scale(-1, 1);
      offsetLocation.x = -offsetLocation.x - this.bounds.size.x;
    }
    if (this.rotation !== 0) {
      const center = this.bounds.center().subtract(offset);
      canvas.ctx.translate(center.x, center.y);
      canvas.ctx.rotate(this.rotation);
      canvas.ctx.translate(-center.x, -center.y);
    }
    canvas.drawTexts(
      this.backingArray,
      offsetLocation.x,
      offsetLocation.y,
      this.lineHeight
    );
    canvas.ctx.restore();
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
        measurement.actualBoundingBoxDescent +
        this.lineHeight;
      width = Math.max(
        width,
        measurement.actualBoundingBoxRight + measurement.actualBoundingBoxLeft
      );
    }
    return new Rectangle(location, new Point(width, height));
  }
};

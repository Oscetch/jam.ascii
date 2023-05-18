var Point = require("./point");

module.exports = class Rectangle {
  /**
   * @param {Point} location
   * @param {Point} size
   */
  constructor(location, size) {
    this.location = location;
    this.size = size;
  }

  /**
   * @returns {Number}
   */
  left() {
    return this.location.x;
  }
  /**
   * @returns {Number}
   */
  right() {
    return this.location.x + this.size.x;
  }
  /**
   * @returns {Number}
   */
  top() {
    return this.location.y;
  }
  /**
   * @returns {Number}
   */
  bottom() {
    return this.location.y + this.size.y;
  }
  /**
   * @returns {Point}
   */
  center() {
    return new Point(
      this.location.x + this.size.x / 2,
      this.location.y + this.size.y / 2
    );
  }

  /**
   * @param {Rectangle} other
   * @returns {Rectangle}
   */
  centerOn(other) {
    return new Rectangle(
      other.center().subtract(this.size.dividedBy(2)),
      new Point(this.size.x, this.size.y)
    );
  }

  /**
   * @param {Point} point
   * @returns {Rectangle}
   */
  centerOnPoint(point) {
    return new Rectangle(
      point.subtract(this.size.dividedBy(2)),
      new Point(this.size.x, this.size.y)
    );
  }

  /**
   * @param {Rectangle} other
   * @returns {Rectangle}
   */
  centerX(other) {
    return new Rectangle(
      new Point(other.center().x - this.size.x / 2, this.location.y),
      new Point(this.size.x, this.size.y)
    );
  }

  /**
   * @param {Rectangle} other
   * @returns {Rectangle}
   */
  centerY(other) {
    return new Rectangle(
      new Point(this.location.y, other.center().y - this.size.y / 2),
      new Point(this.size.x, this.size.y)
    );
  }

  /**
   * @param {Rectangle} other
   * @returns {Rectangle}
   */
  union(other) {
    let y = Math.min(this.location.y, other.location.y);
    let bottom = Math.max(this.bottom(), other.bottom());
    let x = Math.min(this.location.x, other.location.x);
    let right = Math.max(this.right(), other.right());
    let width = right - x;
    let height = bottom - y;
    return new Rectangle(new Point(x, y), new Point(width, height));
  }

  /**
   * @param {Rectangle} other
   * @returns {Boolean}
   */
  containsRectangle(other) {
    return (
      this.left() <= other.left() &&
      this.right() >= other.right() &&
      this.bottom() >= other.bottom() &&
      this.top() <= other.top()
    );
  }

  /**
   * @param {Point} point
   * @returns {Boolean}
   */
  containsPoint(point) {
    return (
      this.left() <= point.x &&
      this.right() >= point.x &&
      this.bottom() >= point.y &&
      this.top() <= point.y
    );
  }

  /**
   * @param {Rectangle} other
   * @returns {Boolean}
   */
  overlaps(other) {
    return (
      this.left() < other.right() &&
      this.right() > other.left() &&
      this.bottom() > other.top() &&
      this.top() < other.bottom()
    );
  }

  /**
   * @typedef {Object} SplitRectangle
   * @property {Rectangle} topLeft
   * @property {Rectangle} topRight
   * @property {Rectangle} bottomLeft
   * @property {Rectangle} bottomRight
   *
   * @returns {SplitRectangle}
   */
  split() {
    const halfWidth = this.size.x / 2;
    const halfHeight = this.size.y / 2;
    const rightX = this.location.x + halfWidth;
    const bottomY = this.location.y + halfHeight;
    return {
      topLeft: new Rectangle(
        new Point(this.location.x, this.location.y),
        new Point(halfWidth, halfHeight)
      ),
      topRight: new Rectangle(
        new Point(rightX, this.location.y),
        new Point(halfWidth, halfHeight)
      ),
      bottomLeft: new Rectangle(
        new Point(this.location.x, bottomY),
        new Point(halfWidth, halfHeight)
      ),
      bottomRight: new Rectangle(
        new Point(rightX, bottomY),
        new Point(halfWidth, halfHeight)
      ),
    };
  }
};

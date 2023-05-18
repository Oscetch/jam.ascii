module.exports = class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {Point} other
   * @returns {Point}
   */
  add(other) {
    return new Point(this.x + other.x, this.y + other.y);
  }
  /**
   * @param {Point} other
   * @returns {Point}
   */
  subtract(other) {
    return new Point(this.x - other.x, this.y - other.y);
  }
  /**
   * @param {Number} number
   * @returns {Point}
   */
  dividedBy(number) {
    return new Point(this.x / number, this.y / number);
  }
  /**
   * @param {Number} number
   * @returns {Point}
   */
  multiplyBy(number) {
    return new Point(this.x * number, this.y * number);
  }

  /**
   * @param {Number} angle
   * @param {Number} distance
   * @returns {Point}
   */
  moveInDirection(angle, distance) {
    const x = this.x + distance * Math.cos(angle);
    const y = this.y + distance * Math.sin(angle);
    return new Point(x, y);
  }

  /**
   * @param {Point} other
   * @returns {Number}
   */
  angleTo(other) {
    const deltaY = other.y - this.y;
    const deltaX = other.x - this.x;
    return Math.atan2(deltaY, deltaX);
  }

  /**
   * @param {Point} other
   * @returns {Number}
   */
  distanceTo(other) {
    const x = Math.pow(other.x - this.x, 2);
    const y = Math.pow(other.y - this.y, 2);
    return Math.sqrt(x + y);
  }
};

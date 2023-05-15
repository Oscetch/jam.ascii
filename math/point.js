module.exports = class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Point(this.x + other.x, this.y + other.y);
  }
  subtract(other) {
    return new Point(this.x - other.x, this.y - other.y);
  }
  dividedBy(number) {
    return new Point(this.x / number, this.y / number);
  }

  moveInDirection(angle, distance) {
    return new Point(
      this.x + distance * Math.cos(angle),
      this.y + distance * Math.sin(angle)
    );
  }

  angleTo(other) {
    const deltaY = other.y - this.y;
    const deltaX = other.x - this.x;
    return Math.atan2(deltaY, deltaX);
  }

  distanceTo(other) {
    const x = Math.pow(other.x - this.x, 2);
    const y = Math.pow(other.y - this.y, 2);
    return Math.sqrt(x + y);
  }
};

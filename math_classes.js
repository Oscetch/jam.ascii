class Point {
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
}

class Rectangle {
  constructor(location, size) {
    this.location = location;
    this.size = size;
  }

  left() {
    return this.location.x;
  }
  right() {
    return this.location.x + this.size.x;
  }
  top() {
    return this.location.y;
  }
  bottom() {
    return this.location.y + this.size.y;
  }
  center() {
    return new Point(
      this.location.x + this.size.x / 2,
      this.location.y + this.size.y / 2
    );
  }

  union(other) {
    let y = Math.min(this.location.y, other.location.y);
    let bottom = Math.max(this.bottom(), other.bottom());
    let x = Math.min(this.location.x, other.location.x);
    let right = Math.max(this.right(), other.right());
    let width = right - x;
    let height = bottom - y;
    return new Rectangle(new Point(x, y), new Point(width, height));
  }

  containsRectangle(other) {
    return (
      this.left() <= other.left() &&
      this.right() >= other.right() &&
      this.bottom() >= other.bottom() &&
      this.top() <= other.top()
    );
  }

  containsPoint(point) {
    return (
      this.left() <= point.x &&
      this.right() >= point.x &&
      this.bottom() >= point.y &&
      this.top() <= point.y
    );
  }

  overlaps(other) {
    return (
      this.left() < other.right() &&
      this.right() > other.left() &&
      this.bottom() > other.top() &&
      this.top() < other.bottom()
    );
  }
}

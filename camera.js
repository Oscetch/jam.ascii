const Rectangle = require("./math/rectangle");
const Point = require("./math/point");

module.exports = class Camera {
  bounds = new Rectangle(new Point(0, 0), new Point(1440, 1024));
  velocity = new Point();
};

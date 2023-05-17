const Camera = require("../camera");
const { randomFloat } = require("../math/common");
const Point = require("../math/point");
const DistantStar = require("./distantstar");

module.exports = class DistantStarHandler {
  #stars = [];

  /**
   *
   * @param {Camera} camera
   */
  constructor(camera) {
    this.camera = camera;
  }

  render(canvas, deltaTime) {
    for (let i = 0; i < this.#stars.length; i++) {
      const star = this.#stars[i];
      star.update(canvas, deltaTime);
      star.renderTranslated(canvas, this.camera.bounds.location);
      if (star.shouldRemove || !this.camera.bounds.overlaps(star.bounds)) {
        this.#stars.splice(i, 1);
        i--;
      }
    }
    const missingStars = 100 - this.#stars.length;
    for (let i = 0; i < missingStars; i++) {
      const positionX = randomFloat(
        this.camera.bounds.left(),
        this.camera.bounds.right()
      );
      const positionY = randomFloat(
        this.camera.bounds.top(),
        this.camera.bounds.bottom()
      );
      const position = new Point(positionX, positionY);
      this.#stars.push(new DistantStar(canvas, position));
    }
  }
};

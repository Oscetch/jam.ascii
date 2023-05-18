const GameObject = require("../GameObjects/gameobject");
const Rectangle = require("./../math/rectangle");
const CanvasASCII = require("./../canvas_ascii");
const { randomFloat, randomInt, addToAngle } = require("./../math/common");

module.exports = class Sun extends GameObject {
  isPlanet = false;

  /**
   * @param {Rectangle} rotationBounds
   * @param {String} ascii
   * @param {CanvasASCII} canvas
   */
  constructor(rotationBounds, ascii, canvas) {
    super(ascii, canvas, 15);
    this.color = "#FFFFFF";
    this.rotationBounds = rotationBounds;
    this.rotationBoundsCenter = rotationBounds.center();
    this.rotationSpeed = randomFloat(Math.PI / 32, Math.PI / 16);
    if (randomInt(0, 2) == 0) {
      this.rotationSpeed = -this.rotationSpeed;
    }
  }

  update(canvas, deltaTime) {
    const center = this.bounds.center();
    // only need to calculate once?
    const distanceFromCenter = center.distanceTo(this.rotationBoundsCenter);

    const angleFromCenter = this.rotationBoundsCenter.angleTo(center);
    const newAngle = addToAngle(
      angleFromCenter,
      this.rotationSpeed * deltaTime
    );
    const newCenter = this.rotationBoundsCenter.moveInDirection(
      newAngle,
      distanceFromCenter
    );

    this.bounds.location = newCenter.subtract(this.bounds.size.dividedBy(2));
  }

  isInteractable() {
    return false;
  }
};

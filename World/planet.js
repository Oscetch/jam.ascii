const GameObject = require("../GameObjects/gameobject");
const CanvasASCII = require("./../canvas_ascii");
const Sun = require("./sun");
const { randomFloat, addToAngle, PI2, randomInt } = require("./../math/common");

module.exports = class Planet extends GameObject {
  isVisited = false;
  isPlanet = true;
  #hasSetBroken = false;

  /**
   * @param {Sun} sun
   * @param {String} ascii
   * @param {CanvasASCII} canvas
   * @param {Number} distanceToSun
   */
  constructor(sun, asciiRegular, asciiBroken, canvas, distanceToSun) {
    super(asciiRegular, canvas, randomInt(1, 4));
    this.asciiBroken = asciiBroken;
    this.color = "#FFFFFF";
    this.distanceToSun = distanceToSun;
    this.rotationSpeed = randomFloat(Math.PI / 32, Math.PI / 16);
    if (randomInt(0, 2) == 0) {
      this.rotationSpeed = -this.rotationSpeed;
    }
    this.currentAngle = randomFloat(0, PI2);
    this.sun = sun;
    this.update(canvas, 0);
  }

  update(canvas, deltaTime) {
    if (this.isVisited && !this.#hasSetBroken) {
      this.#hasSetBroken = true;
      this.color = "#798377";
      this.updateBackingArray(canvas, this.asciiBroken.split("\n"));
    }
    this.currentAngle = addToAngle(
      this.currentAngle,
      this.rotationSpeed * deltaTime
    );
    const newCenter = this.sun.bounds
      .center()
      .moveInDirection(this.currentAngle, this.distanceToSun);

    this.bounds.location = newCenter.subtract(this.bounds.size.dividedBy(2));
  }

  isInteractable() {
    return !this.isVisited;
  }
};

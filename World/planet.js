const GameObject = require("../GameObjects/gameobject");
const CanvasASCII = require("./../canvas_ascii");
const Sun = require("./sun");
const { randomFloat, addToAngle, PI2, randomInt } = require("./../math/common");
const { STORAGE_PLANET_COUNTER } = require("../Models/constants");

module.exports = class Planet extends GameObject {
  isVisited = false;
  isPlanet = true;

  /**
   * @param {Sun} sun
   * @param {String} ascii
   * @param {CanvasASCII} canvas
   * @param {Number} distanceToSun
   */
  constructor(sun, ascii, canvas, distanceToSun) {
    super(ascii, canvas, 10);
    this.color = "#FFFFFF";
    this.distanceToSun = distanceToSun;
    this.rotationSpeed = randomFloat(Math.PI / 32, Math.PI / 16);
    if (randomInt(0, 2) == 0) {
      this.rotationSpeed = -this.rotationSpeed;
    }
    this.currentAngle = randomFloat(0, PI2);
    this.sun = sun;
    this.update(canvas, 0);

    const currentPlanet = Number(localStorage.getItem(STORAGE_PLANET_COUNTER));
    this.id = currentPlanet ? currentPlanet : 0;
    localStorage.setItem(STORAGE_PLANET_COUNTER, currentPlanet + 1);
  }

  update(canvas, deltaTime) {
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

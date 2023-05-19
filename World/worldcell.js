const GameObject = require("../GameObjects/gameobject");
const CanvasASCII = require("../canvas_ascii");
const { randomInt, lerpColor } = require("../math/common");
const Rectangle = require("../math/rectangle");
const Planet = require("./planet");
const Sun = require("./sun");

module.exports = {
  /**
   *
   * @param {Rectangle} bounds
   * @param {CanvasASCII} canvas
   * @returns {GameObject[]}
   */
  build(bounds, canvas) {
    const sunSize = this.toOdd(randomInt(5, 12));
    const sun = new Sun(bounds, this.createPlanetAscii(sunSize, "@"), canvas);
    sun.color = lerpColor("#FFFF00", "#FFA500", (sunSize - 5) / 6);
    let system = [sun];
    const planetCount = randomInt(0, 9);
    const split = bounds.split();
    const quadrantsArray = [
      split.topLeft,
      split.topRight,
      split.bottomLeft,
      split.bottomRight,
    ];
    const startQuadrant = quadrantsArray[randomInt(0, 4)];
    sun.bounds = sun.bounds.centerOn(startQuadrant);
    const planetDistance =
      sun.bounds.center().distanceTo(bounds.center()) / planetCount;

    for (let i = 0; i < planetCount; i++) {
      const planet = new Planet(
        sun,
        this.createPlanetAscii(this.toOdd(randomInt(3, sunSize - 2)), "#"),
        canvas,
        planetDistance * (i + 1)
      );
      system.push(planet);
    }

    return system;
  },
  createPlanetAscii(size, fillChar) {
    let ascii = "";
    let width = 1;
    const half = size / 2;
    for (let y = 0; y < size; y++) {
      const spaces = Math.ceil(half - width / 2);
      for (let x = 0; x < spaces; x++) {
        ascii += " ";
      }
      for (let x = 0; x < width; x++) {
        ascii += fillChar;
      }
      width += 2;
      if (y + 1 > half) {
        width -= 4;
      }
      ascii += "\n";
    }
    return ascii;
  },

  toOdd(number) {
    return number % 2 === 0 ? number - 1 : number;
  },
};

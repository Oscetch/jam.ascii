const GameObject = require("../GameObjects/gameobject");
const { STORAGE_PLANET_COUNTER } = require("../Models/constants");
const CanvasASCII = require("../canvas_ascii");
const Point = require("../math/point");
const Rectangle = require("../math/rectangle");
const WorldCell = require("./worldcell");

module.exports = {
  /**
   * @typedef {Object} WorldAndBounds
   * @property {Rectangle} bounds
   * @property {GameObject[]} galaxy
   */

  /**
   * @param {Number} worldWidth
   * @param {Number} worldHeight
   * @param {Number} cellSize
   * @param {CanvasASCII} canvas
   * @returns {WorldAndBounds}
   */
  build(worldWidth, worldHeight, cellSize, canvas) {
    let galaxy = [];
    var bounds = new Rectangle(new Point(), new Point());
    localStorage.setItem(STORAGE_PLANET_COUNTER, 0);
    const info = {
      cellsCreated: 0,
      sunsCreated: 0,
      planetsCreated: 0,
    };
    for (let x = 0; x < worldWidth; x += cellSize) {
      for (let y = 0; y < worldHeight; y += cellSize) {
        const cellBounds = new Rectangle(
          new Point(x, y),
          new Point(cellSize, cellSize)
        );
        const system = WorldCell.build(cellBounds, canvas);
        bounds = bounds.union(cellBounds);
        galaxy.push(...system);
        info.cellsCreated += 1;
        info.sunsCreated += 1;
        info.planetsCreated += system.length - 1;
      }
    }
    console.log(info);
    return {
      bounds,
      galaxy,
    };
  },
};

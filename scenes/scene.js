const CanvasASCII = require("../canvas_ascii");
const Point = require("../math/point");
/**
 * @callback OnChangeScene
 * @param {Number} newSceneKey
 */

module.exports = class Scene {
  #lastUpdate = 0;
  backgroundColor = "#000000";

  /**
   *
   * @param {CanvasASCII} canvas
   * @param {OnChangeScene} onChangeScene
   */
  constructor(canvas, onChangeScene) {
    this.canvas = canvas;
    this.onChangeScene = onChangeScene;
  }

  resetLastUpdate() {
    this.#lastUpdate = Date.now();
  }

  onStart() {
    this.resetLastUpdate();
  }
  onEnd() {}
  render() {
    let now = Date.now();
    let deltaTime;
    if (this.#lastUpdate) {
      deltaTime = (now - this.#lastUpdate) / 1000;
    } else {
      deltaTime = 0.01;
    }
    this.#lastUpdate = now;
    this.renderInternal(deltaTime);
  }
  renderInternal(deltaTime) {}

  /**
   * @param {Point} point
   */
  onMouseMove(point) {}
  /**
   * @param {Point} point
   */
  onMouseDown(point) {}
  /**
   * @param {Point} point
   */
  onMouseUp(point) {}
  /**
   * @param {Number} keyCode
   */
  onKeyDown(keyCode) {}
  /**
   * @param {Number} keyCode
   */
  onKeyUp(keyCode) {}
};

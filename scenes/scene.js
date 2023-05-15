module.exports = class Scene {
  #lastUpdate = 0;
  constructor(canvas, onChangeScene) {
    this.canvas = canvas;
    this.onChangeScene = onChangeScene;
  }

  onStart() {
    this.#lastUpdate = Date.now();
  }
  onEnd() {}
  render() {
    let now = Date.now();
    let deltaTime;
    if (deltaTime) {
      deltaTime = (now - this.#lastUpdate) / 1000;
    } else {
      deltaTime = 0.01;
    }
    this.#lastUpdate = now;
    this.renderInternal(deltaTime);
  }
  renderInternal(deltaTime) {}
};

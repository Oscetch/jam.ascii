const Point = require("../../math/point");
const GameObject = require("../gameobject");

const overlayChar = "Û";

module.exports = class HealthBar extends GameObject {
  #overlay;
  #targetWidth;

  constructor(canvas) {
    super(
      `
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂`,
      canvas,
      6
    );
    this.color = "#FFFFFF";
    this.#targetWidth = this.backingArray[0].length;

    this.#overlay = new GameObject(``, canvas, 6);
    this.#overlay.color = "#32D74B";
  }

  setTargetPercent(targetPercent) {
    this.#targetWidth = Math.floor(this.backingArray[0].length * targetPercent);
  }

  buildOverlaySize(size, canvas) {
    const arr = ["", ""];
    for (let i = 0; i < size; i++) {
      arr[0] += overlayChar;
      arr[1] += overlayChar;
    }
    this.#overlay.updateBackingArray(canvas, arr);
  }

  updateOverlaySize(canvas) {
    const currentWidth = this.#overlay.backingArray[0].length;
    const diff = currentWidth - this.#targetWidth;
    if (diff === 0) {
      return;
    }
    if (diff > 0) {
      this.buildOverlaySize(currentWidth - 1, canvas);
    } else {
      this.buildOverlaySize(currentWidth + 1, canvas);
    }
  }

  update(canvas, deltaTime) {
    super.update(canvas, deltaTime);
    this.updateOverlaySize(canvas);
    this.#overlay.bounds.location = new Point(
      this.bounds.right() - this.#overlay.bounds.size.x,
      this.bounds.location.y
    );
  }

  render(canvas) {
    super.render(canvas);
    this.#overlay.render(canvas);
  }
};

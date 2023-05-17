const GameObject = require("../GameObjects/gameobject");
const { randomFloat } = require("../math/common");

module.exports = class DistantStar extends GameObject {
  #elapsedTime = 0;
  #lifeTime;
  shouldRemove = false;

  constructor(canvas, position) {
    super(".", canvas, 10);
    this.color = "#FFFFFF";
    this.bounds.location = position;
    this.#lifeTime = randomFloat(0.1, 5);
  }

  update(canvas, deltaTime) {
    this.#elapsedTime += deltaTime;
    this.shouldRemove = this.#elapsedTime > this.#lifeTime;
  }
};

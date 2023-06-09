const Point = require("../../math/point");
const GameObject = require("../gameobject");

module.exports = class CharacterBase extends GameObject {
  velocity = new Point();
  movementSpeed = 1500;

  constructor(ascii, canvas, fontSize = 8) {
    super(ascii, canvas, fontSize);
  }

  update(canvas, deltaTime) {
    super.update(canvas, deltaTime);
    const angle = new Point().angleTo(this.velocity);
    const distance = Math.min(
      this.movementSpeed,
      new Point().distanceTo(this.velocity)
    );

    this.bounds.location = this.bounds.location.moveInDirection(
      angle,
      distance * deltaTime
    );
    if (this.velocity.x > 0) {
      this.flip = false;
    } else if (this.velocity.x < 0) {
      this.flip = true;
    }
  }
};

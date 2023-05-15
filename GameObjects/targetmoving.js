var GameObject = require("./gameobject");

module.exports = class TargetMoving extends GameObject {
  movementSpeed = 200;
  onTargetReached;

  constructor(ascii, canvas, target) {
    super(ascii, canvas);
    this.target = target;
  }

  update(canvas, deltaTime) {
    const distanceToTarget = this.bounds.location.distanceTo(this.target);
    const distance = Math.min(distanceToTarget, this.movementSpeed * deltaTime);
    const angle = this.bounds.location.angleTo(this.target);
    this.bounds.location = this.bounds.location.moveInDirection(
      angle,
      distance
    );
    if (distance === distanceToTarget && this.onTargetReached) {
      this.onTargetReached();
      this.onTargetReached = undefined;
    }
  }
};

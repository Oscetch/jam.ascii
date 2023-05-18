const Rectangle = require("./math/rectangle");
const Point = require("./math/point");

module.exports = class Camera {
  bounds = new Rectangle(new Point(0, 0), new Point(1440, 1024));
  speed = 2000;
  followTarget;

  update(deltaTime) {
    if (!this.followTarget) {
      return;
    }
    const center = this.bounds.center();
    const followTargetCenter = this.followTarget.center();
    const maxDistance = new Point(this.bounds.left(), center.y).distanceTo(
      center
    );
    const distanceFromTarget = center.distanceTo(followTargetCenter);
    const speedPercent = distanceFromTarget / maxDistance;
    const calculatedSpeedPerSecond = speedPercent * this.speed;
    const sumPositionDiff = calculatedSpeedPerSecond * deltaTime;
    const angleToTarget = center.angleTo(followTargetCenter);

    this.bounds.location = this.bounds.location.moveInDirection(
      angleToTarget,
      sumPositionDiff
    );
  }
};

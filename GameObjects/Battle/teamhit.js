const GameObject = require("../gameobject");

module.exports = class TeamHit extends GameObject {
  constructor(canvas, position, amount) {
    super(
      ` ² 


²

 ²`,
      canvas,
      12
    );
    this.bounds.location = position;
    this.hitAmount = new GameObject(`-${amount} HIT`, canvas, 16);
    this.hitAmount.bounds = this.hitAmount.bounds.centerOn(this.bounds);
    this.hitAmount.bounds.location.x = this.bounds.right() + 4;
  }

  render(canvas) {
    super.render(canvas);
    this.hitAmount.render(canvas);
  }
};

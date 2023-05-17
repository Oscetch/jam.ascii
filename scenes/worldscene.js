const Scene = require("./scene");
const { build } = require("./../World/worldbuilder");
const GameObject = require("./../GameObjects/gameobject");
const Camera = require("../camera");
const Rectangle = require("../math/rectangle");
const Point = require("../math/point");
const { KEY_CODE, clamp } = require("./../math/common");
const DistantStarHandler = require("../World/distantstarhandler");

module.exports = class WorldScene extends Scene {
  #items;
  #cameraMovementSpeed = 1000;

  onStart() {
    this.canvas.canvas.style = "background-color: #000000";
    const worldAndBounds = build(10_000, 10_000, 2000, this.canvas);
    this.#items = worldAndBounds.galaxy;
    this.cameraBounds = worldAndBounds.bounds;
    this.camera = new Camera();
    this.distantStarHandler = new DistantStarHandler(this.camera);
    window.addEventListener("keydown", (event) => {
      this.onKeyDown(event.keyCode);
    });
    window.addEventListener("keyup", (event) => {
      this.onKeyUp(event.keyCode);
    });
  }

  renderInternal(deltaTime) {
    this.canvas.clear();
    this.distantStarHandler.render(this.canvas, deltaTime);
    this.camera.bounds.location = this.camera.bounds.location.add(
      this.camera.velocity.multiplyBy(deltaTime)
    );
    const cameraLocation = this.camera.bounds.location;
    this.camera.bounds.location.x = clamp(
      cameraLocation.x,
      this.cameraBounds.left(),
      this.cameraBounds.right()
    );
    this.camera.bounds.location.y = clamp(
      cameraLocation.y,
      this.cameraBounds.top(),
      this.cameraBounds.bottom()
    );
    const inclusiveSize = this.camera.bounds.size.multiplyBy(2);
    const inclusiveBounds = new Rectangle(new Point(), inclusiveSize).centerOn(
      this.camera.bounds
    );

    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      if (inclusiveBounds.overlaps(item.bounds)) {
        item.update(this.canvas, deltaTime);
        item.renderTranslated(this.canvas, this.camera.bounds.location);
      }
    }
  }

  onKeyDown(keyCode) {
    switch (keyCode) {
      case KEY_CODE.LEFT:
      case KEY_CODE.A_KEY:
        this.camera.velocity.x = -this.#cameraMovementSpeed;
        break;
      case KEY_CODE.RIGHT:
      case KEY_CODE.D_KEY:
        this.camera.velocity.x = this.#cameraMovementSpeed;
        break;
      case KEY_CODE.UP:
      case KEY_CODE.W_KEY:
        this.camera.velocity.y = -this.#cameraMovementSpeed;
        break;
      case KEY_CODE.DOWN:
      case KEY_CODE.S_KEY:
        this.camera.velocity.y = this.#cameraMovementSpeed;
        break;
    }
  }

  onKeyUp(keyCode) {
    switch (keyCode) {
      case KEY_CODE.LEFT:
      case KEY_CODE.A_KEY:
      case KEY_CODE.RIGHT:
      case KEY_CODE.D_KEY:
        this.camera.velocity.x = 0;
        break;
      case KEY_CODE.UP:
      case KEY_CODE.W_KEY:
      case KEY_CODE.DOWN:
      case KEY_CODE.S_KEY:
        this.camera.velocity.y = 0;
        break;
    }
  }
};

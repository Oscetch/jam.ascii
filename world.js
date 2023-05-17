const KEY_CODE = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  A_KEY: 65,
  D_KEY: 68,
  S_KEY: 83,
  W_KEY: 87,
};

class World {
  items = [];
  camera = new Camera();

  constructor(canvas) {
    this.canvas = canvas;

    for (let i = 0; i < 1000; i++) {
      const go = new GameObject("AA\nAA", canvas);
      go.bounds.location = new Point(randomInt(4000), randomInt(4000));
      this.items.push(go);
    }
  }

  update() {}

  render() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (this.camera.bounds.containsRectangle(item.bounds)) {
        item.update(this.canvas);
        item.renderTranslated(this.canvas, this.camera.bounds.location);
      }
    }
  }

  onKeyDown(keyCode) {
    switch (keyCode) {
      case KEY_CODE.LEFT:
      case KEY_CODE.A_KEY:
        this.camera.bounds.location.x -= 10;
        break;
      case KEY_CODE.RIGHT:
      case KEY_CODE.D_KEY:
        this.camera.bounds.location.x += 10;
        break;
      case KEY_CODE.UP:
      case KEY_CODE.W_KEY:
        this.camera.bounds.location.y -= 10;
        break;
      case KEY_CODE.DOWN:
      case KEY_CODE.S_KEY:
        this.camera.bounds.location.y += 10;
        break;
    }
  }
}

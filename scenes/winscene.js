const GameObject = require("../GameObjects/gameobject");
const Point = require("../math/point");
const Rectangle = require("../math/rectangle");
const Scene = require("./scene");

module.exports = class WinScene extends Scene {
  onStart() {
    this.backgroundColor = "#000000";
    const size = new Rectangle(
      new Point(),
      new Point(this.canvas.canvas.width, this.canvas.canvas.height)
    );
    this.gameobject = new GameObject("YOU WIN!", this.canvas);
    this.gameobject.color = "#FFFFFF";
    this.gameobject.bounds = this.gameobject.bounds.centerOn(size);
  }

  renderInternal(deltaTime) {
    this.canvas.clear();
    this.gameobject.render(this.canvas);
  }
};

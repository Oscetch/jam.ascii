const GameObject = require("../GameObjects/gameobject");
const { SCENE_KEY_SELECT_CHARACTER } = require("../Models/constants");
const Point = require("../math/point");
const Rectangle = require("../math/rectangle");
const Scene = require("./scene");

module.exports = class DeathScene extends Scene {
  onStart() {
    this.backgroundColor = "#000000";
    const size = new Rectangle(
      new Point(),
      new Point(this.canvas.canvas.width, this.canvas.canvas.height)
    );
    this.gameobject = new GameObject("LOL", this.canvas);
    this.gameobject.color = "#FFFFFF";
    this.gameobject.bounds = this.gameobject.bounds.centerOn(size);

    setTimeout(() => {
      this.onChangeScene(SCENE_KEY_SELECT_CHARACTER);
    }, 1000);
  }

  renderInternal(deltaTime) {
    this.gameobject.render(this.canvas);
  }
};

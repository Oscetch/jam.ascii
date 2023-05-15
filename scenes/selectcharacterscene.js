var Point = require("./../math/point");
var Rectangle = require("./../math/rectangle");
var GameObject = require("./../GameObjects/gameobject");
var Scene = require("./scene");
var CharacterDescription = require("../GameObjects/CharacterSelection/characterdescription");

module.exports = class SelectCharacterScene extends Scene {
  #items = [];

  onStart() {
    const canvasBounds = new Rectangle(
      new Point(),
      new Point(this.canvas.canvas.width, this.canvas.canvas.height)
    );
    const center = canvasBounds.center();
    const selectMainCharacterText = new GameObject(
      "Select main character",
      this.canvas
    );
    selectMainCharacterText.color = "#FFFFFF";
    selectMainCharacterText.bounds.location = new Point(
      center.x - selectMainCharacterText.bounds.size.x / 2,
      center.y - selectMainCharacterText.bounds.size.y / 2
    );
    this.#items.push(selectMainCharacterText);

    setTimeout(() => {
      this.#items.pop();
      this.canvas.canvas.style = "background-color: #FFFFFF";
      this.#items.push(new CharacterDescription(this.canvas));
    }, 1000);
  }

  renderInternal(deltaTime) {
    this.canvas.clear();
    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      item.update(this.canvas, deltaTime);
      item.render(this.canvas);
    }
  }
};

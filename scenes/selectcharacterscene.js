const Point = require("./../math/point");
const Rectangle = require("./../math/rectangle");
const GameObject = require("./../GameObjects/gameobject");
const Scene = require("./scene");
const CharacterDescription = require("../GameObjects/CharacterSelection/characterdescription");
const { SCENE_KEY_WORLD, MIA, MAX, BEN, AVA } = require("../Models/constants");
const internalMemory = require("./../Models/internalmemory");
const CharacterStats = require("../Models/characterstats");

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
      this.backgroundColor = "#FFFFFF";
      this.canvas.canvas.style = "background-color: #FFFFFF";
      this.#items.push(
        new CharacterDescription(this.canvas, (selectedName) => {
          internalMemory.reset();
          internalMemory.team = [
            new CharacterStats(MIA, MIA === selectedName),
            new CharacterStats(MAX, MAX === selectedName),
            new CharacterStats(BEN, BEN === selectedName),
            new CharacterStats(AVA, AVA === selectedName),
          ];
          this.onChangeScene(SCENE_KEY_WORLD);
        })
      );
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

  onMouseDown(point) {
    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      if (item.onMouseDown) {
        item.onMouseDown(point);
      }
    }
  }

  onMouseUp(point) {
    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      if (item.onMouseUp) {
        item.onMouseUp(point);
      }
    }
  }

  onMouseMove(point) {
    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      if (item.onMouseMove) {
        item.onMouseMove(point);
      }
    }
  }
};

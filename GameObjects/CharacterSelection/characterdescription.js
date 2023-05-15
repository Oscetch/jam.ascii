const CharacterDescriptionBackground = require("./characterdescriptionbackground");
const Point = require("../../math/point");
const SelectButton = require("./selectbutton");
const AvaDescriptionWrapper = require("./Ava/avadescriptionwrapper");
const BenDescriptionWrapper = require("./Ben/bendescriptionwrapper");
const MaxDescriptionWrapper = require("./Max/maxdescriptionwrapper");
const MiaDescriptionWrapper = require("./Mia/miadescriptionwrapper");
const MiaCard = require("./Mia/miacard");
const MaxCard = require("./Max/maxcard");
const BenCard = require("./Ben/bencard");
const AvaCard = require("./Ava/avacard");
const GameObject = require("./../gameobject");

module.exports = class CharacterDescription {
  #selections;
  #selected = 0;
  #items = [];

  constructor(canvas) {
    this.background = new CharacterDescriptionBackground(canvas);
    this.background.bounds.location = new Point(0, 704);
    this.selectButton = new SelectButton(canvas, () => {
      console.log("FINISHED");
    });
    this.#selections = [
      new MiaDescriptionWrapper(canvas),
      new MaxDescriptionWrapper(canvas),
      new BenDescriptionWrapper(canvas),
      new AvaDescriptionWrapper(canvas),
    ];
    const miaCard = new MiaCard(canvas);
    this.#items.push(miaCard);
    this.#items.push(new MaxCard(canvas));
    this.#items.push(new BenCard(canvas));
    this.#items.push(new AvaCard(canvas));

    this.selectionIndicator = new GameObject("", canvas, 32);
    this.selectionIndicator.color = "#5722EE";
    this.selectionIndicator.bounds.location.x =
      miaCard.items[0].bounds.location.x -
      46 -
      this.selectionIndicator.bounds.size.x;

    canvas.registerMouseMoveEvent(
      this.selectButton.onMouseMove.bind(this.selectButton)
    );
    canvas.registerMouseUpEvent(
      this.selectButton.onMouseUp.bind(this.selectButton)
    );
    canvas.registerMouseDownEvent(
      this.selectButton.onMouseDown.bind(this.selectButton)
    );
  }

  update(canvas, deltaTime) {
    this.selectButton.update(canvas, deltaTime);

    const selected = this.#items[this.#selected].items[0].bounds.center().y;
    const indicatorHeight = this.selectionIndicator.bounds.size.y;
    this.selectionIndicator.bounds.location.y = selected - indicatorHeight / 2;
  }

  render(canvas) {
    this.background.render(canvas);
    const selection = this.#selections[this.#selected].gameObjects;

    for (let i = 0; i < selection.length; i++) {
      selection[i].render(canvas);
    }

    this.selectButton.render(canvas);

    for (let i = 0; i < this.#items.length; i++) {
      this.#items[i].render(canvas);
    }

    this.selectionIndicator.render(canvas);
  }
};

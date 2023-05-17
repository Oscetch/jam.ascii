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
const { MIA, MAX, BEN, AVA } = require("../../Models/constants");

module.exports = class CharacterDescription {
  #selections;
  #selected = 0;
  #items = [];
  #isHovered = false;

  constructor(canvas, onSelected) {
    this.background = new CharacterDescriptionBackground(canvas);
    this.background.bounds.location = new Point(0, 704);
    this.selectButton = new SelectButton(canvas, () => {
      switch (this.#selected) {
        case 0:
          onSelected(MIA);
        case 1:
          onSelected(MAX);
        case 2:
          onSelected(BEN);
        case 3:
          onSelected(AVA);
      }
    });
    this.#selections = [
      new MiaDescriptionWrapper(canvas),
      new MaxDescriptionWrapper(canvas),
      new BenDescriptionWrapper(canvas),
      new AvaDescriptionWrapper(canvas),
    ];
    const miaCard = new MiaCard(canvas);
    this.#items.push(miaCard);
    miaCard.select();
    this.#items.push(new MaxCard(canvas));
    this.#items.push(new BenCard(canvas));
    this.#items.push(new AvaCard(canvas));

    this.selectionIndicator = new GameObject("", canvas, 32);
    this.selectionIndicator.color = "#5722EE";
    this.selectionIndicator.bounds.location.x =
      miaCard.items[0].bounds.location.x -
      46 -
      this.selectionIndicator.bounds.size.x;
    const selected = this.#items[this.#selected].items[0].bounds.center().y;
    const indicatorHeight = this.selectionIndicator.bounds.size.y;
    this.selectionIndicator.bounds.location.y = selected - indicatorHeight / 2;

    canvas.registerMouseMoveEvent((point) => {
      for (let i = 0; i < this.#items.length; i++) {
        const item = this.#items[i];
        item.onMouseMove(point);
      }
      this.selectButton.onMouseMove(point);
    });
    canvas.registerMouseUpEvent((point) => {
      for (let i = 0; i < this.#items.length; i++) {
        const item = this.#items[i];
        if (item.combinedBounds.containsPoint(point)) {
          this.#items[this.#selected].deselect();
          item.select();
          this.#selected = i;
        }
        item.onMouseUp(point);
      }
      this.selectButton.onMouseUp(point);
    });
    canvas.registerMouseDownEvent((point) => {
      for (let i = 0; i < this.#items.length; i++) {
        const item = this.#items[i];
        item.onMouseDown(point);
      }
      this.selectButton.onMouseDown(point);
    });
  }

  update(canvas, deltaTime) {
    this.selectButton.update(canvas, deltaTime);

    let isHovered = false;
    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      item.update(canvas, deltaTime);
      if (item.isHovered) {
        isHovered = true;
        const selected = item.items[0].bounds.center().y;
        const indicatorHeight = this.selectionIndicator.bounds.size.y;
        this.selectionIndicator.bounds.location.y =
          selected - indicatorHeight / 2;
      }
    }
    this.#isHovered = isHovered;
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

    if (this.#isHovered) {
      this.selectionIndicator.render(canvas);
    }
  }
};

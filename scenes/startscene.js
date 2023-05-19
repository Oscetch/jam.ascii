var TargetMoving = require("./../GameObjects/targetmoving");
var Point = require("./../math/point");
var Rectangle = require("./../math/rectangle");
var Scene = require("./scene");
var StartButton = require("./../GameObjects/startbutton");
var SelectCharacterScene = require("./selectcharacterscene");
const { SCENE_KEY_SELECT_CHARACTER } = require("../Models/constants");

module.exports = class StartScene extends Scene {
  #items = [];

  onStart() {
    const gameText = new TargetMoving("Game", this.canvas, new Point());
    gameText.color = "#FFFFFF";
    const canvasBounds = new Rectangle(
      new Point(),
      new Point(this.canvas.canvas.width, this.canvas.canvas.height)
    );
    const bottom = new Point(canvasBounds.center().x, canvasBounds.bottom());
    gameText.bounds.location = new Point(
      bottom.x - gameText.bounds.size.x / 2,
      bottom.y - gameText.bounds.size.y / 2
    );
    gameText.target = new Point(gameText.bounds.location.x, 184);
    const canvas = this.canvas;
    const items = this.#items;
    const onChangeScene = this.onChangeScene;
    gameText.onTargetReached = () => {
      const description1 = new TargetMoving(
        "4 people have crashed on an asteroids,\nthey have no memory of themselves.",
        canvas,
        new Point()
      );
      description1.bounds.location = new Point(
        bottom.x - description1.bounds.size.x / 2,
        bottom.y - description1.bounds.size.y / 2
      );
      description1.lineHeight = 7;
      description1.color = "#FFFFFF";

      description1.target = new Point(description1.bounds.location.x, 245);
      description1.onTargetReached = () => {
        const description2 = new TargetMoving(
          "Their spaceship works, but it can no\nlonger reach hyperspace. The people are\ncalled: Mia, Max, Ben and Ava.",
          canvas,
          new Point()
        );
        description2.bounds.location = new Point(
          bottom.x - description1.bounds.size.x / 2,
          bottom.y - description1.bounds.size.y / 2
        );
        description2.lineHeight = 7;
        description2.target = new Point(description2.bounds.location.x, 311);
        description2.color = "#FFFFFF";

        description2.onTargetReached = () => {
          const startButton = new StartButton(canvas, () =>
            onChangeScene(SCENE_KEY_SELECT_CHARACTER)
          );
          startButton.updatePosition(
            new Point(bottom.x - startButton.background.bounds.size.x / 2, 429)
          );
          items.push(startButton);
        };

        items.push(description2);
      };

      items.push(description1);
    };
    this.#items.push(gameText);
    super.onStart();
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
      this.#items[i].onMouseDown(point);
    }
  }
  onMouseUp(point) {
    for (let i = 0; i < this.#items.length; i++) {
      this.#items[i].onMouseUp(point);
    }
  }
};

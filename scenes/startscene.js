var TargetMoving = require("./../GameObjects/targetmoving");
var Point = require("./../math/point");
var Rectangle = require("./../math/rectangle");
var Scene = require("./scene");
var StartButton = require("./../GameObjects/startbutton");
var SelectCharacterScene = require("./selectcharacterscene");

module.exports = class StartScene extends Scene {
  #items = [];

  onStart() {
    this.canvas.canvas.style = "background-color: #000000";
    const gameText = new TargetMoving("Game", this.canvas, new Point());
    gameText.color = "#FFFFFF";
    const canvasBounds = new Rectangle(
      new Point(),
      new Point(this.canvas.canvas.width, this.canvas.canvas.height)
    );
    const center = new Point(canvasBounds.center().x, canvasBounds.bottom());
    gameText.bounds.location = new Point(
      center.x - gameText.bounds.size.x / 2,
      center.y - gameText.bounds.size.y / 2
    );
    gameText.target = new Point(
      gameText.bounds.location.x,
      334 - gameText.bounds.size.y / 2
    );
    const canvas = this.canvas;
    const items = this.#items;
    const onChangeScene = this.onChangeScene;
    gameText.onTargetReached = function () {
      const description1 = new TargetMoving(
        "4 people have crashed on an asteroids,\nthey have no memory of themselves.",
        canvas,
        new Point()
      );
      description1.bounds.location = new Point(
        center.x - description1.bounds.size.x / 2,
        center.y - description1.bounds.size.y / 2
      );
      description1.color = "#FFFFFF";

      description1.target = new Point(description1.bounds.location.x, 387);
      description1.onTargetReached = function () {
        const description2 = new TargetMoving(
          "Their spaceship works, but it can no\nlonger reach hyperspace. The people are\ncalled: Mia, Max, Ben and Ava.",
          canvas,
          new Point()
        );
        description2.bounds.location = new Point(
          center.x - description1.bounds.size.x / 2,
          center.y - description1.bounds.size.y / 2
        );
        description2.target = new Point(description2.bounds.location.x, 459);
        description2.color = "#FFFFFF";

        description2.onTargetReached = function () {
          const startButton = new StartButton(canvas, () =>
            onChangeScene(new SelectCharacterScene(canvas, onChangeScene))
          );
          startButton.updatePosition(
            new Point(center.x - startButton.background.bounds.size.x / 2, 690)
          );
          items.push(startButton);

          canvas.canvas.onmousedown = function (event) {
            var rect = canvas.canvas.getBoundingClientRect();
            var mouseX = event.clientX - rect.left;
            var mouseY = event.clientY - rect.top;
            startButton.onMouseDown(new Point(mouseX, mouseY));
          };
          canvas.canvas.onmouseup = function (event) {
            var rect = canvas.canvas.getBoundingClientRect();
            var mouseX = event.clientX - rect.left;
            var mouseY = event.clientY - rect.top;
            startButton.onMouseUp(new Point(mouseX, mouseY));
          };
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
};

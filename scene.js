class Scene {
  constructor(canvas) {
    this.canvas = canvas;
  }

  onStart() {}
  onEnd() {}
  render() {}
}

class StartScene extends Scene {
  #items = [];
  #lastUpdate = 0;

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
          const startButton = new StartButton(canvas);
          startButton.updatePosition(
            new Point(center.x - startButton.background.bounds.size.x / 2, 690)
          );
          items.push(startButton);
        };

        items.push(description2);
      };

      items.push(description1);
    };
    this.#items.push(gameText);
    this.#lastUpdate = Date.now();
  }

  render() {
    this.canvas.clear();
    let now = Date.now();
    let deltaTime;
    if (deltaTime) {
      deltaTime = (now - this.#lastUpdate) / 1000;
    } else {
      deltaTime = 0.01;
    }
    this.#lastUpdate = now;
    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      item.update(this.canvas, deltaTime);
      item.render(this.canvas);
    }
  }
}

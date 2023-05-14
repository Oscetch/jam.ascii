class UI {
  items = [];

  constructor(canvas) {
    this.canvas = canvas;
  }

  render() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].render(canvas);
    }
  }

  update() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].render(canvas);
    }
  }

  onMouseMove(point) {
    this.#iterateItems((item) => {
      //if (item.onMouseMove && )
    });
  }

  onMouseDown(point) {}

  onMouseUp(point) {}

  #iterateItems(action) {
    for (let i = 0; i < this.items.length; i++) {
      action(this.items[i]);
    }
  }
}

class WorldUI extends UI {
  constructor(canvas) {
    super(canvas);
    this.items.push(createButton(canvas));
  }
}

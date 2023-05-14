class GameObject {
  backingArray;
  color = "#000000";

  constructor(ascii, canvas) {
    this.backingArray = ascii.split("\n");
    this.bounds = getBounds(this.backingArray, canvas);
  }

  update(canvas, deltaTime) {}

  render(canvas) {
    canvas.setFontColor(this.color);
    let center = this.bounds.location;
    canvas.drawTexts(this.backingArray, center.x, center.y);
  }
  renderTranslated(canvas, offset) {
    canvas.setFontColor(this.color);
    let center = this.bounds.location.subtract(offset);
    canvas.drawTexts(this.backingArray, center.x, center.y);
  }
}

function getBounds(arr, canvas, location = new Point()) {
  let width = 0;
  let height = 0;
  for (let i = 0; i < arr.length; i++) {
    let measurement = canvas.ctx.measureText(arr[i]);
    height +=
      measurement.actualBoundingBoxAscent +
      measurement.actualBoundingBoxDescent;
    width = Math.max(
      width,
      measurement.actualBoundingBoxRight + measurement.actualBoundingBoxLeft
    );
  }
  return new Rectangle(location, new Point(width, height));
}

class Hoverable extends GameObject {
  onMouseMove(point) {
    if (this.bounds.containsPoint(point)) {
      this.color = "#5722EE";
    } else {
      this.color = "#000000";
    }
  }
}

class Background extends GameObject {
  constructor(overlay, canvas) {
    let maxWidth = 0;
    let ascii = "";
    for (let i = 0; i < overlay.backingArray.length; i++) {
      maxWidth = Math.max(overlay.backingArray[i].length, maxWidth);
    }
    for (let i = 0; i < overlay.backingArray.length; i++) {
      for (let x = 0; x < maxWidth; x++) {
        ascii += "²";
      }
      ascii += "\n";
    }
    super(ascii, canvas);
    this.color = "#FFFFFF";
  }
}

class TargetMoving extends GameObject {
  movementSpeed = 200;
  onTargetReached;

  constructor(ascii, canvas, target) {
    super(ascii, canvas);
    this.target = target;
  }

  update(canvas, deltaTime) {
    const distanceToTarget = this.bounds.location.distanceTo(this.target);
    const distance = Math.min(distanceToTarget, this.movementSpeed * deltaTime);
    const angle = this.bounds.location.angleTo(this.target);
    this.bounds.location = this.bounds.location.moveInDirection(
      angle,
      distance
    );
    if (distance === distanceToTarget && this.onTargetReached) {
      this.onTargetReached();
      this.onTargetReached = undefined;
    }
  }
}

class Button {
  #isClicked = false;

  constructor(regularAscii, onClickAscii, canvas, onClicked) {
    this.regular = new Hoverable(regularAscii, canvas);
    this.background = new Background(this.regular, canvas);
    this.onClickBackground = new GameObject(onClickAscii, canvas);
    this.onClickText = new GameObject("PRESS", canvas);
    this.onClickBackground.color = "#5722EE";
    this.onClickText.color = "#FFFFFF";
    this.onClicked = onClicked;
  }

  updatePosition(point) {
    this.background.bounds.location = point;
    this.regular.bounds.location = point;
    this.onClickBackground.bounds.location = point;
  }

  update(canvas, deltaTime) {
    this.regular.update(canvas);
    this.onClickBackground.update(canvas);
    let bgCenter = this.onClickBackground.bounds.center();
    let point = new Point(
      bgCenter.x - this.onClickText.bounds.size.x / 2,
      bgCenter.y - this.onClickText.bounds.size.y / 2
    );
    this.onClickText.bounds.location = point;
    this.onClickText.update(canvas);
  }

  render(canvas) {
    this.background.render(canvas);
    if (this.#isClicked) {
      this.onClickBackground.render(canvas);
      this.onClickText.render(canvas);
    } else {
      this.regular.render(canvas);
    }
  }

  onMouseMove(point) {
    this.regular.onMouseMove(point);
  }

  onMouseDown(point) {
    if (!this.#isClicked && this.regular.bounds.containsPoint(point)) {
      this.#isClicked = true;
    }
  }

  onMouseUp(point) {
    if (this.#isClicked && this.regular.bounds.containsPoint(point)) {
      this.onClicked();
    }
    this.#isClicked = false;
  }
}

class StartButton {
  constructor(canvas) {
    this.background = new GameObject(
      `
▎       
▂▂▂▂▂▂▂`,
      canvas
    );
    this.background.color = "#FFFFFF";
    this.startText = new GameObject("START", canvas);
    this.startText.color = "#FFFFFF";
    this.#centerStartText();
  }

  updatePosition(point) {
    this.background.bounds.location = point;
    this.#centerStartText();
  }

  update(canvas, deltaTime) {}

  render(canvas) {
    this.background.render(canvas);
    this.startText.render(canvas);
  }

  #centerStartText() {
    const bgCenter = this.background.bounds.center();
    this.startText.bounds.location = new Point(
      bgCenter.x - this.startText.bounds.size.x / 2,
      bgCenter.y - this.startText.bounds.size.y / 2
    );
  }
}

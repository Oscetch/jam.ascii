const Point = require("../../math/point");
const BottomPanelBackground = require("../bottompanelbackground");
const Button = require("../button");

module.exports = class EnterPlanetDialog {
  show = false;

  constructor(canvas, onInvestigate) {
    this.background = new BottomPanelBackground(canvas);
    this.background.color = "#FFFFFF";

    const split = this.background.bounds.split();
    const topQuad = split.topRight.union(split.topLeft);
    const bottomQuad = split.bottomRight.union(split.bottomLeft);

    this.investigateButton = new Button("INVESTIGATE", canvas, onInvestigate);
    this.investigateButton.hoverColor = "#5722EE";
    this.investigateButton.regularColor = "#000000";
    this.investigateButton.bounds =
      this.investigateButton.bounds.centerOn(topQuad);

    this.cancelButton = new Button("   LEAVE   ", canvas, () => {
      this.show = false;
    });
    this.cancelButton.hoverColor = "#5722EE";
    this.cancelButton.regularColor = "#000000";
    this.cancelButton.bounds = this.cancelButton.bounds.centerOn(bottomQuad);

    canvas.canvas.onmousemove = (event) => {
      const point = this.getMousePosition(canvas, event);
      this.investigateButton.onMouseMove(point);
      this.cancelButton.onMouseMove(point);
    };
    canvas.canvas.onmousedown = (event) => {
      const point = this.getMousePosition(canvas, event);
      this.investigateButton.onMouseDown(point);
      this.cancelButton.onMouseDown(point);
    };
    canvas.canvas.onmouseup = (event) => {
      const point = this.getMousePosition(canvas, event);
      this.investigateButton.onMouseUp(point);
      this.cancelButton.onMouseUp(point);
    };
  }

  getMousePosition(canvas, event) {
    var rect = canvas.canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;
    return new Point(mouseX, mouseY);
  }

  render(canvas, deltaTime) {
    this.investigateButton.update(canvas, deltaTime);
    this.cancelButton.update(canvas, deltaTime);

    this.background.render(canvas);
    this.investigateButton.render(canvas);
    this.cancelButton.render(canvas);
  }
};

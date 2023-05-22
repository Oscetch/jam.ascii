const Point = require("../../math/point");
const Button = require("../button");
const GameObject = require("../gameobject");
const SmallBottomPanelBackground = require("./smallbottompanelbackground");
const internalMemory = require("./../../Models/internalmemory");

module.exports = class EnterPlanetDialog {
  show = false;

  constructor(canvas, onInvestigate) {
    this.background = new SmallBottomPanelBackground(canvas);
    this.background.color = "#111112";

    this.investigateButton = new Button(
      "INVESTIGATE",
      canvas,
      onInvestigate,
      14
    );
    this.investigateButton.hoverColor = "#5722EE";
    this.investigateButton.regularColor = "#FFFFFF";
    this.investigateButton.bounds.location = new Point(446, 587);

    this.cancelButton = new Button(
      "LEAVE",
      canvas,
      () => {
        this.show = false;
      },
      14
    );
    this.cancelButton.hoverColor = "#5722EE";
    this.cancelButton.regularColor = "#FFFFFF";
    this.cancelButton.bounds.location = new Point(658, 587);

    this.text = new GameObject("PLANET", canvas, 16);
    this.text.color = "#FFFFFF";
    this.text.bounds.location = new Point(40, 596);
  }

  render(canvas, deltaTime) {
    this.investigateButton.update(canvas, deltaTime);
    this.cancelButton.update(canvas, deltaTime);
    if (
      internalMemory.visitingPlanet &&
      internalMemory.visitingPlanet.name !== this.text.backingArray[0]
    ) {
      this.text.updateBackingArray(canvas, [
        internalMemory.visitingPlanet.name,
      ]);
    }

    this.background.render(canvas);
    this.investigateButton.render(canvas);
    this.cancelButton.render(canvas);

    this.text.render(canvas);
  }

  onMouseDown(point) {
    this.investigateButton.onMouseDown(point);
    this.cancelButton.onMouseDown(point);
  }

  onMouseUp(point) {
    this.investigateButton.onMouseUp(point);
    this.cancelButton.onMouseUp(point);
  }

  onMouseMove(point) {
    this.investigateButton.onMouseMove(point);
    this.cancelButton.onMouseMove(point);
  }
};

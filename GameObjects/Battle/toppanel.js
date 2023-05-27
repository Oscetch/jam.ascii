const GameObject = require("../gameobject");
const internalMemory = require("../../Models/internalmemory");
const TopPanelBackground = require("../toppanelbackground");
const Point = require("../../math/point");
const HealthBar = require("./healthbar");

module.exports = class TopPanel {
  constructor(canvas) {
    this.background = new TopPanelBackground(canvas);

    const backgroundCenterY = this.background.bounds.center().y;
    const space = this.background.bounds.size.x / 4;
    this.title = new GameObject(internalMemory.monster.name, canvas, 14);
    const scale = space / this.title.bounds.size.x;
    if (scale < 1) {
      this.title.setFontSize(Math.floor(14 * scale), canvas);
    }

    this.title.bounds = this.title.bounds.centerOnPoint(
      new Point(space / 2, backgroundCenterY)
    );
    this.title.color = "#FFFFFF";

    this.healthBar = new HealthBar(canvas);
    this.healthBar.bounds = this.healthBar.bounds.centerOnPoint(
      new Point(space * 2, backgroundCenterY)
    );

    this.healthText = new GameObject(
      `${internalMemory.monster.stats.currentHealth}/${internalMemory.monster.stats.health}`,
      canvas,
      12
    );
    this.healthText.color = "#FFFFFF";
    this.healthText.bounds = this.healthText.bounds.centerOnPoint(
      new Point(space * 3.5, backgroundCenterY)
    );
  }

  render(canvas, deltaTime) {
    this.healthBar.setTargetPercent(
      internalMemory.monster.stats.currentHealth /
        internalMemory.monster.stats.health
    );
    this.healthBar.update(canvas, deltaTime);

    this.background.render(canvas);
    this.title.render(canvas);
    this.healthBar.render(canvas);
    this.healthText.updateBackingArray(canvas, [
      `${internalMemory.monster.stats.currentHealth}/${internalMemory.monster.stats.health}`,
    ]);
    this.healthText.render(canvas);
  }
};

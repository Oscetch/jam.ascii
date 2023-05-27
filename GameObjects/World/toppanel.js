const internalmemory = require("../../Models/internalmemory");
const Point = require("../../math/point");
const FuelIcon = require("../BattleStart/fuelicon");
const LevelIcon = require("../BattleStart/levelicon");
const MemoryIcon = require("../BattleStart/memoryicon");
const Button = require("../button");
const GameObject = require("../gameobject");
const TopPanelBackground = require("../toppanelbackground");
const FuelBar = require("./fuelbar");
const PlanetIcon = require("./planeticon");

const maxFuelTime = 30;

module.exports = class TopPanel {
  #items = [];

  constructor(canvas, onJump) {
    this.background = new TopPanelBackground(canvas);
    this.#items.push(this.background);

    this.levelIcon = new LevelIcon(canvas);
    this.levelIcon.bounds.location = new Point(24, 27);
    this.#items.push(this.levelIcon);

    this.levelText = new GameObject("lvl", canvas, 12);
    this.levelText.bounds.location = new Point(44, 16);
    this.#items.push(this.levelText);

    this.level = new GameObject(String(internalmemory.level), canvas, 12);
    this.level.bounds.location = new Point(44, 36);
    this.#items.push(this.level);

    this.memoryIcon = new MemoryIcon(canvas);
    this.memoryIcon.bounds.location = new Point(104, 27);
    this.#items.push(this.memoryIcon);

    this.memoryText = new GameObject("Memory", canvas, 12);
    this.memoryText.bounds.location = new Point(126, 16);
    this.#items.push(this.memoryText);

    this.memory = new GameObject(`${internalmemory.memories}/10`, canvas, 12);
    this.memory.bounds.location = new Point(126, 36);
    this.#items.push(this.memory);

    this.planetIcon = new PlanetIcon(canvas);
    this.planetIcon.bounds.location = new Point(222, 29);
    this.#items.push(this.planetIcon);

    this.planetText = new GameObject("Explored", canvas, 12);
    this.planetText.bounds.location = new Point(241, 16);
    this.#items.push(this.planetText);

    this.planets = new GameObject(
      `${internalmemory.planetsVisited}/${internalmemory.planetsTotal}`,
      canvas,
      12
    );
    this.planets.bounds.location = new Point(241, 36);
    this.#items.push(this.planets);

    this.jumpButton = new Button(
      "JUMP",
      canvas,
      () => {
        onJump();
      },
      14
    );
    this.jumpButton.bounds = this.jumpButton.bounds.centerOnPoint(
      new Point(415 + 126 / 2, 12 + 42 / 2)
    );
    this.jumpButton.regularColor = "#FFFFFF";

    this.fuelIcon = new FuelIcon(canvas);
    this.fuelIcon.bounds.location = new Point(661, 13);
    this.#items.push(this.fuelIcon);

    this.fuelText = new GameObject(
      `Fuel ${internalmemory.fuel}/10`,
      canvas,
      12
    );
    this.fuelText.bounds.location = new Point(680, 12);
    this.#items.push(this.fuelText);

    this.fuelTime = new GameObject("05:00", canvas, 12);
    this.fuelTime.bounds.location = new Point(556, 36);
    this.#items.push(this.fuelTime);

    this.fuelBar = new FuelBar(canvas);
    this.fuelBar.bounds.location = new Point(624, 36);
    this.#items.push(this.fuelBar);

    for (let i = 1; i < this.#items.length; i++) {
      this.#items[i].color = "#FFFFFF";
    }
  }

  render(canvas, deltaTime) {
    internalmemory.fuelTime += deltaTime;
    if (internalmemory.fuelTime > maxFuelTime) {
      internalmemory.fuel -= 1;
      internalmemory.fuelTime = 0;
    }
    this.level.updateBackingArray(canvas, [String(internalmemory.level)]);
    this.memory.updateBackingArray(canvas, [`${internalmemory.memories}/10`]);
    this.planets.updateBackingArray(canvas, [
      `${internalmemory.planetsVisited}/${internalmemory.planetsTotal}`,
    ]);
    this.fuelText.updateBackingArray(canvas, [
      `Fuel ${internalmemory.fuel}/10`,
    ]);
    const timeLeft = maxFuelTime - internalmemory.fuelTime;
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(Math.floor(timeLeft % 60)).padStart(2, "0");
    this.fuelTime.updateBackingArray(canvas, [`${minutes}:${seconds}`]);
    this.fuelBar.setTargetPercent(timeLeft / maxFuelTime);

    this.fuelBar.update(canvas, deltaTime);

    for (let i = 0; i < this.#items.length; i++) {
      this.#items[i].render(canvas);
    }

    if (this.canJump()) {
      this.jumpButton.update(canvas, deltaTime);
      this.jumpButton.render(canvas);
    }
  }

  onMouseDown(point) {
    if (this.canJump()) {
      this.jumpButton.onMouseDown(point);
    }
  }

  onMouseUp(point) {
    if (this.canJump()) {
      this.jumpButton.onMouseUp(point);
    }
  }

  onMouseMove(point) {
    if (this.canJump()) {
      this.jumpButton.onMouseMove(point);
    }
  }

  canJump() {
    return internalmemory.fuel === 10 && internalmemory.level === 10;
  }
};

const internalmemory = require("../../Models/internalmemory");
const Point = require("../../math/point");
const FuelIcon = require("../BattleStart/fuelicon");
const LevelIcon = require("../BattleStart/levelicon");
const MemoryIcon = require("../BattleStart/memoryicon");
const GameObject = require("../gameobject");
const TopPanelBackground = require("../toppanelbackground");
const PlanetIcon = require("./planeticon");

module.exports = class TopPanel {
  #items = [];

  constructor(canvas) {
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

    for (let i = 1; i < this.#items.length; i++) {
      this.#items[i].color = "#FFFFFF";
    }
  }

  render(canvas, deltaTime) {
    internalmemory.fuelTime += deltaTime;
    if (internalmemory.fuelTime > 300) {
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
    const timeLeft = 300 - internalmemory.fuelTime;
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = Math.floor(timeLeft % 60);
    this.fuelTime.updateBackingArray(canvas, [`${minutes}:${seconds}`]);

    for (let i = 0; i < this.#items.length; i++) {
      this.#items[i].render(canvas);
    }
  }
};

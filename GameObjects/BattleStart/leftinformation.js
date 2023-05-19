const { fuel, memories, level } = require("../../Models/internalmemory");
const Point = require("../../math/point");
const GameObject = require("../gameobject");
const Banner = require("./banner");
const FuelIcon = require("./fuelicon");
const LevelIcon = require("./levelicon");
const MemoryIcon = require("./memoryicon");

module.exports = class LeftInformation {
  #items = [];
  constructor(canvas) {
    this.banner = new Banner(canvas);
    this.banner.bounds.location = new Point(48, 0);
    this.#items.push(this.banner);

    this.youText = new GameObject("YOU", canvas, 14);
    this.youText.color = "#FFFFFF";
    this.youText.bounds.location.y = 48;
    this.youText.bounds.location.x = this.youText.bounds.centerX(
      this.banner.bounds
    );
    this.#items.push(this.youText);

    this.levelIcon = new LevelIcon(canvas);
    this.levelIcon.color = "#FFFFFF";
    this.levelIcon.bounds.location = new Point(87.39, 82.89);
    this.#items.push(this.levelIcon);

    this.levelText = new GameObject("lvl", canvas, 12);
    this.levelText.color = "#FFFFFF";
    this.levelText.bounds.location = new Point(75.39, 100.89);
    this.#items.push(this.levelText);

    this.currentLevelText = new GameObject(String(level), canvas, 16);
    this.currentLevelText.color = "#FFFFFF";
    this.currentLevelText.bounds.location = new Point(85.39, 122.89);
    this.#items.push(this.currentLevelText);

    this.fuelIcon = new FuelIcon(canvas);
    this.fuelIcon.bounds.location = new Point(87.89, 170.89);
    this.fuelIcon.color = "#FFFFFF";
    this.#items.push(this.fuelIcon);

    this.fuelText = new GameObject("Fuel", canvas, 12);
    this.fuelText.bounds.location = new Point(69.39, 188.89);
    this.fuelText.color = "#FFFFFF";
    this.#items.push(this.fuelText);

    this.fuelAmountText = new GameObject(`${fuel}/10`, canvas, 12);
    this.fuelAmountText.bounds.location = new Point(66.39, 210.89);
    this.fuelAmountText.color = "#FFFFFF";
    this.#items.push(this.fuelAmountText);

    this.memoryIcon = new MemoryIcon(canvas);
    this.memoryIcon.bounds.location = new Point(86.39, 252.89);
    this.memoryIcon.color = "#FFFFFF";
    this.#items.push(this.memoryIcon);

    this.memoryText = new GameObject("Memory", canvas, 12);
    this.memoryText.bounds.location = new Point(57.39, 270.89);
    this.memoryText.color = "#FFFFFF";
    this.#items.push(this.memoryText);

    this.memoryAmountText = new GameObject(`${memories}/10`, canvas, 12);
    this.memoryAmountText.bounds.location = new Point(67.39, 292.89);
    this.memoryAmountText.color = "#FFFFFF";
    this.#items.push(this.memoryAmountText);
  }

  render(canvas) {
    for (let i = 0; i < this.#items.length; i++) {
      this.#items[i].render(canvas);
    }
  }
};

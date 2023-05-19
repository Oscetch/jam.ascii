const Point = require("../../math/point");
const EnemyBase = require("../Enemies/enemybase");
const GameObject = require("../gameobject");
const FuelIcon = require("./fuelicon");
const LevelIcon = require("./levelicon");

module.exports = class MonsterView {
  #items = [];

  /**
   * @param {CanvasASCII} canvas
   * @param {EnemyBase} monster
   */
  constructor(canvas, monster) {
    this.titleText = new GameObject(monster.name, canvas, 32);
    this.titleText.bounds.location = new Point(208, 48);
    this.#items.push(this.titleText);

    this.monster = monster;
    this.monster.setFontSize(20, canvas);
    this.monster.bounds.location = new Point(260, 136);
    this.#items.push(this.monster);

    this.levelIcon = new LevelIcon(canvas);
    this.levelIcon.bounds.location = new Point(656, 48);
    this.#items.push(this.levelIcon);

    this.levelText = new GameObject("lvl", canvas, 12);
    this.levelText.bounds.location = new Point(644, 66);
    this.#items.push(this.levelText);

    this.monsterLevel = new GameObject(String(monster.stats.level), canvas, 16);
    this.monsterLevel.bounds.location = new Point(654, 88);
    this.#items.push(this.monsterLevel);

    this.fuelIcon = new FuelIcon(canvas);
    this.fuelIcon.bounds.location = new Point(722.5, 48);
    this.#items.push(this.fuelIcon);

    this.fuelText = new GameObject("Fuel", canvas, 12);
    this.fuelText.bounds.location = new Point(704, 66);
    this.#items.push(this.fuelText);

    this.fuelAmount = new GameObject(`+${monster.fuel}`, canvas, 16);
    this.fuelAmount.bounds.location = new Point(712, 88);
    this.#items.push(this.fuelAmount);
  }

  render(canvas) {
    for (let i = 0; i < this.#items.length; i++) {
      this.#items[i].render(canvas);
    }
  }
};

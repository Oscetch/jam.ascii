const Point = require("../../math/point");
const FuelIcon = require("../BattleStart/fuelicon");
const LevelIcon = require("../BattleStart/levelicon");
const GameObject = require("../gameobject");

module.exports = class MonsterViewEnd {
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
    const enemyCenter = new Point(288 + 112, 136 + 56);
    const targetHeight = 112;
    const changeInFontSize = targetHeight / this.monster.bounds.size.y;
    this.monster.setFontSize(
      Math.floor(changeInFontSize * this.monster.fontSize),
      canvas
    );
    this.monster.bounds = this.monster.bounds.centerOnPoint(enemyCenter);
    this.#items.push(this.monster);

    this.levelIcon = new LevelIcon(canvas);
    this.levelIcon.bounds.location = new Point(358, 312);
    this.#items.push(this.levelIcon);

    this.levelText = new GameObject("lvl", canvas, 12);
    this.levelText.bounds.location = new Point(346, 330);
    this.#items.push(this.levelText);

    this.monsterLevel = new GameObject(String(monster.stats.level), canvas, 16);
    this.monsterLevel.bounds.location = new Point(654, 350);
    this.monsterLevel.bounds = this.monsterLevel.bounds.centerX(
      this.levelText.bounds
    );
    this.#items.push(this.monsterLevel);

    this.fuelIcon = new FuelIcon(canvas);
    this.fuelIcon.bounds.location = new Point(424.5, 312);
    this.#items.push(this.fuelIcon);

    this.fuelText = new GameObject("Fuel", canvas, 12);
    this.fuelText.bounds.location = new Point(406, 330);
    this.#items.push(this.fuelText);

    this.fuelAmount = new GameObject(`+${monster.fuel}`, canvas, 16);
    this.fuelAmount.bounds.location = new Point(0, 350);
    this.fuelAmount.bounds = this.fuelAmount.bounds.centerX(
      this.fuelText.bounds
    );
    this.#items.push(this.fuelAmount);
  }

  render(canvas) {
    for (let i = 0; i < this.#items.length; i++) {
      this.#items[i].render(canvas);
    }
  }
};

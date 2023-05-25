const internalmemory = require("../../Models/internalmemory");
const CanvasASCII = require("../../canvas_ascii");
const BottomPanelBackground = require("../bottompanelbackground");
const Button = require("../button");

module.exports = class BattleEndBottomPanel {
  /**
   * @callback OnBackCallback
   */
  /**
   * @param {CanvasASCII} canvas
   * @param {OnRunCallback} onRun
   * @param {OnBackCallback} onFight
   */
  constructor(canvas, backToCosmos) {
    this.background = new BottomPanelBackground(canvas);
    this.backButton = new Button(
      "BACK TO COSMOS",
      canvas,
      () => {
        backToCosmos();
      },
      14
    );
    this.backButton.bounds = this.backButton.bounds.centerOn(
      this.background.bounds
    );
    this.backButton.regularColor = "#FFFFFF";

    const monster = internalmemory.monster;
    internalmemory.fuel = Math.min(10, monster.fuel + internalmemory.fuel);
    internalmemory.memories = Math.min(10, monster.memories);
    if (monster.stats.level > internalmemory.level) {
      internalmemory.level = Math.min(10, internalmemory.level + 1);
      for (let i = 0; i < internalmemory.team.length; i++) {
        const teamMember = internalmemory.team[i];
        teamMember.setStatsForLevel(internalmemory.level);
      }
    }
  }

  render(canvas, deltaTime) {
    this.backButton.update(canvas, deltaTime);

    this.background.render(canvas);
    this.backButton.render(canvas);
  }

  onMouseDown(point) {
    this.backButton.onMouseDown(point);
  }

  onMouseUp(point) {
    this.backButton.onMouseUp(point);
  }

  onMouseMove(point) {
    this.backButton.onMouseMove(point);
  }
};

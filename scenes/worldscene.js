const Scene = require("./scene");
const { build } = require("./../World/worldbuilder");
const Camera = require("../camera");
const Rectangle = require("../math/rectangle");
const Point = require("../math/point");
const { KEY_CODE, clamp } = require("./../math/common");
const DistantStarHandler = require("../World/distantstarhandler");
const {
  MIA,
  MAX,
  BEN,
  AVA,
  SCENE_KEY_BATTLE_START,
  SCENE_KEY_DEATH,
  SCENE_KEY_WIN,
} = require("../Models/constants");
const internalMemory = require("../Models/internalmemory");
const EnterPlanetDialog = require("../GameObjects/World/enterplanetdialog");
const MiaShip = require("../GameObjects/Characters/miaship");
const MaxShip = require("../GameObjects/Characters/maxship");
const BenShip = require("../GameObjects/Characters/benship");
const AvaShip = require("../GameObjects/Characters/avaship");
const TopPanel = require("../GameObjects/World/toppanel");

module.exports = class WorldScene extends Scene {
  #items;
  #connectedToCharacter = [];

  onStart() {
    const worldAndBounds = build(20_000, 20_000, 4000, this.canvas);
    this.#items = worldAndBounds.galaxy;
    this.worldBounds = worldAndBounds.bounds;
    internalMemory.planetsTotal = worldAndBounds.info.planetsCreated;
    this.camera = new Camera();
    this.distantStarHandler = new DistantStarHandler(this.camera);
    this.character = this.getCharacter();
    this.character.color = "#FFFFFF";
    this.character.bounds = this.character.bounds.centerOn(this.worldBounds);
    this.enterPlanetDialog = new EnterPlanetDialog(this.canvas, () => {
      this.enterPlanetDialog.show = false;
      this.onChangeScene(SCENE_KEY_BATTLE_START);
    });
    this.topPanel = new TopPanel(this.canvas, () => {
      this.onChangeScene(SCENE_KEY_WIN);
    });
  }

  renderInternal(deltaTime) {
    this.canvas.clear();

    if (internalMemory.fuel <= 0) {
      this.onChangeScene(SCENE_KEY_DEATH);
      return;
    }

    this.distantStarHandler.render(this.canvas, deltaTime);
    if (!this.enterPlanetDialog.show) {
      this.character.update(this.canvas, deltaTime);
    }

    const characterLocation = this.character.bounds.location;
    this.character.bounds.location.x = clamp(
      characterLocation.x,
      this.worldBounds.left(),
      this.worldBounds.right()
    );
    this.character.bounds.location.y = clamp(
      characterLocation.y,
      this.worldBounds.top(),
      this.worldBounds.bottom()
    );
    this.camera.followTarget = this.character.bounds;
    this.camera.update(deltaTime);
    const inclusiveSize = this.camera.bounds.size.multiplyBy(2);
    const inclusiveBounds = new Rectangle(new Point(), inclusiveSize).centerOn(
      this.camera.bounds
    );

    for (let i = 0; i < this.#connectedToCharacter.length; i++) {
      const item = this.#connectedToCharacter[i];
      if (!item.bounds.overlaps(this.character.bounds)) {
        this.#connectedToCharacter.splice(i, 1);
        i--;
      }
    }

    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      if (!this.enterPlanetDialog.show) {
        item.update(this.canvas, deltaTime);
      }
      if (inclusiveBounds.overlaps(item.bounds)) {
        if (
          item.isInteractable() &&
          !this.isConnectedToCharacter(item) &&
          item.bounds.overlaps(this.character.bounds)
        ) {
          this.#connectedToCharacter.push(item);
          this.enterPlanetDialog.show = true;
          internalMemory.visitingPlanet = item;
        }
        item.renderTranslated(this.canvas, this.camera.bounds.location);
      }
    }

    this.character.renderTranslated(this.canvas, this.camera.bounds.location);

    this.topPanel.render(this.canvas, deltaTime);

    if (this.enterPlanetDialog.show) {
      this.enterPlanetDialog.render(this.canvas, deltaTime);
    }
  }

  isConnectedToCharacter(planet) {
    for (let i = 0; i < this.#connectedToCharacter.length; i++) {
      const item = this.#connectedToCharacter[i];
      if (item.id === planet.id) {
        return true;
      }
    }
    return false;
  }

  getCharacter() {
    for (let i = 0; i < internalMemory.team.length; i++) {
      const char = internalMemory.team[i];
      if (char.isMainCharacter) {
        switch (char.name) {
          case MIA:
            return new MiaShip(this.canvas);
          case MAX:
            return new MaxShip(this.canvas);
          case BEN:
            return new BenShip(this.canvas);
          case AVA:
            return new AvaShip(this.canvas);
        }
      }
    }
  }

  onMouseDown(point) {
    this.enterPlanetDialog.onMouseDown(point);
    this.topPanel.onMouseDown(point);
  }

  onMouseUp(point) {
    this.enterPlanetDialog.onMouseUp(point);
    this.topPanel.onMouseUp(point);
  }

  onMouseMove(point) {
    this.enterPlanetDialog.onMouseMove(point);
    this.topPanel.onMouseMove(point);
  }

  onKeyDown(keyCode) {
    switch (keyCode) {
      case KEY_CODE.LEFT:
      case KEY_CODE.A_KEY:
        this.character.velocity.x = -this.character.movementSpeed;
        break;
      case KEY_CODE.RIGHT:
      case KEY_CODE.D_KEY:
        this.character.velocity.x = this.character.movementSpeed;
        break;
      case KEY_CODE.UP:
      case KEY_CODE.W_KEY:
        this.character.velocity.y = -this.character.movementSpeed;
        break;
      case KEY_CODE.DOWN:
      case KEY_CODE.S_KEY:
        this.character.velocity.y = this.character.movementSpeed;
        break;
    }
  }

  onKeyUp(keyCode) {
    switch (keyCode) {
      case KEY_CODE.LEFT:
      case KEY_CODE.A_KEY:
      case KEY_CODE.RIGHT:
      case KEY_CODE.D_KEY:
        this.character.velocity.x = 0;
        break;
      case KEY_CODE.UP:
      case KEY_CODE.W_KEY:
      case KEY_CODE.DOWN:
      case KEY_CODE.S_KEY:
        this.character.velocity.y = 0;
        break;
    }
  }
};

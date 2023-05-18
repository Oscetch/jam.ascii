const Scene = require("./scene");
const { build } = require("./../World/worldbuilder");
const GameObject = require("./../GameObjects/gameobject");
const Camera = require("../camera");
const Rectangle = require("../math/rectangle");
const Point = require("../math/point");
const { KEY_CODE, clamp } = require("./../math/common");
const DistantStarHandler = require("../World/distantstarhandler");
const {
  STORAGE_SELECT_CHAR_KEY,
  MIA,
  MAX,
  BEN,
  AVA,
} = require("../Models/constants");
const Mia = require("../GameObjects/Characters/mia");
const Max = require("../GameObjects/Characters/max");
const Ben = require("../GameObjects/Characters/ben");
const Ava = require("../GameObjects/Characters/ava");
const EnterPlanetDialog = require("../GameObjects/World/enterplanetdialog");

module.exports = class WorldScene extends Scene {
  #items;
  #connectedToCharacter = [];

  onStart() {
    this.canvas.canvas.style = "background-color: #000000";
    const worldAndBounds = build(10_000, 10_000, 2000, this.canvas);
    this.#items = worldAndBounds.galaxy;
    this.worldBounds = worldAndBounds.bounds;
    this.camera = new Camera();
    this.distantStarHandler = new DistantStarHandler(this.camera);
    this.character = this.getCharacter();
    this.character.color = "#FFFFFF";
    this.character.bounds = this.character.bounds.centerOn(this.worldBounds);
    this.enterPlanetDialog = new EnterPlanetDialog(this.canvas);
    window.addEventListener("keydown", (event) => {
      this.onKeyDown(event.keyCode);
    });
    window.addEventListener("keyup", (event) => {
      this.onKeyUp(event.keyCode);
    });
  }

  renderInternal(deltaTime) {
    this.canvas.clear();
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
      if (inclusiveBounds.overlaps(item.bounds)) {
        if (
          item.isInteractable() &&
          !this.isConnectedToCharacter(item) &&
          item.bounds.overlaps(this.character.bounds)
        ) {
          this.#connectedToCharacter.push(item);
          this.enterPlanetDialog.show = true;
        }
        if (!this.enterPlanetDialog.show) {
          item.update(this.canvas, deltaTime);
        }
        item.renderTranslated(this.canvas, this.camera.bounds.location);
      }
    }

    this.character.renderTranslated(this.canvas, this.camera.bounds.location);

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
    const mainChar = localStorage.getItem(STORAGE_SELECT_CHAR_KEY);
    switch (mainChar) {
      case MIA:
        return new Mia(this.canvas);
      case MAX:
        return new Max(this.canvas);
      case BEN:
        return new Ben(this.canvas);
      case AVA:
        return new Ava(this.canvas);
    }
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

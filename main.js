const CanvasASCII = require("./canvas_ascii.js");
const StartScene = require("./scenes/startscene.js");
const SelectCharacterScene = require("./scenes/selectcharacterscene.js");
const WorldScene = require("./scenes/worldscene.js");
const {
  SCENE_KEY_START,
  SCENE_KEY_SELECT_CHARACTER,
  SCENE_KEY_WORLD,
  SCENE_KEY_BATTLE_START,
  SCENE_KEY_BATTLE_INTERLUDE,
  SCENE_KEY_BATTLE,
  SCENE_KEY_BATTLE_END,
  SCENE_KEY_DEATH,
} = require("./Models/constants.js");
const BattleStartScene = require("./scenes/battlestartscene.js");
const BattleInterludeScene = require("./scenes/battleinterludescene.js");
const BattleScene = require("./scenes/battlescene.js");
const BattleEndScene = require("./scenes/battleendscene.js");

var scenes = {};
var scene;
var canvasASCII = new CanvasASCII(document.getElementById("gameCanvas"));
changeScene(SCENE_KEY_START);

function getScene(sceneIndex) {
  switch (sceneIndex) {
    case SCENE_KEY_START:
      if (!scenes.start) {
        scenes.start = new StartScene(canvasASCII, changeScene);
        scenes.start.onStart();
      }
      return scenes.start;
    case SCENE_KEY_SELECT_CHARACTER:
      if (!scenes.selectCharacter) {
        scenes.selectCharacter = new SelectCharacterScene(
          canvasASCII,
          changeScene
        );
        scenes.selectCharacter.onStart();
      }
      return scenes.selectCharacter;
    case SCENE_KEY_WORLD:
      if (!scenes.world) {
        scenes.world = new WorldScene(canvasASCII, changeScene);
        scenes.world.onStart();
      }
      return scenes.world;
    case SCENE_KEY_BATTLE_START:
      const battleStart = new BattleStartScene(canvasASCII, changeScene);
      battleStart.onStart();
      return battleStart;
    case SCENE_KEY_BATTLE_INTERLUDE:
      const battleInterlude = new BattleInterludeScene(
        canvasASCII,
        changeScene
      );
      battleInterlude.onStart();
      return battleInterlude;
    case SCENE_KEY_BATTLE:
      const battleScene = new BattleScene(canvasASCII, changeScene);
      battleScene.onStart();
      return battleScene;
    case SCENE_KEY_BATTLE_END:
      const battleEndScene = new BattleEndScene(canvasASCII, changeScene);
      battleEndScene.onStart();
      return battleEndScene;
    case SCENE_KEY_DEATH:
      scenes = {};
      return getScene(SCENE_KEY_SELECT_CHARACTER);
  }
}

function changeScene(sceneIndex) {
  if (scene) {
    scene.onEnd();
  }
  scene = getScene(sceneIndex);
  canvasASCII.registerMouseDownEvent((point) => scene.onMouseDown(point));
  canvasASCII.registerMouseUpEvent((point) => scene.onMouseUp(point));
  canvasASCII.registerMouseMoveEvent((point) => scene.onMouseMove(point));
  window.addEventListener("keydown", (event) => {
    scene.onKeyDown(event.keyCode);
  });
  window.addEventListener("keyup", (event) => {
    scene.onKeyUp(event.keyCode);
  });
  canvasASCII.canvas.style = "background-color: " + scene.backgroundColor;
}

function gameLoop() {
  scene.render();
  requestAnimationFrame(gameLoop);
}

setTimeout(() => gameLoop(), 1000);

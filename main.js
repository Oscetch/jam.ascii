var CanvasASCII = require("./canvas_ascii.js");
var StartScene = require("./scenes/startscene.js");

var canvasASCII = new CanvasASCII(document.getElementById("gameCanvas"));
var scene = new StartScene(canvasASCII, changeScene);
scene.onStart();

function changeScene(newScene) {
  scene.onEnd();
  scene = newScene;
  scene.onStart();
}

function gameLoop() {
  scene.render();
  requestAnimationFrame(gameLoop);
}

setTimeout(() => gameLoop(), 1000);

import Player from "./player.js";
import Scene1 from "./Scene1.js";
import Scene2 from "./Scene2.js";
var config = {
  width: 800,
  height: 800,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 0 }, // Top down game, so no gravity
    },
  },
};

var game = new Phaser.Game(config);

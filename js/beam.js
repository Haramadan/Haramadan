import Player from "./player.js";
import Scene1 from "./Scene1.js";
import Enemy from "./enemy.js";
export default class Beam extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    var x = scene.player.x;
    var y = scene.player.y;

    super(scene, x, y, "beam");
    scene.projectiles.add(this);
    scene.add.existing(this);

    this.play("beam_anim");
    scene.physics.world.enableBody(this);
    this.body.velocity.y = -250;
    this.body.velocity.x = 0;
    this.create(scene);
  }

  preload() {}

  create(scene) {
    scene.physics.add.collider(this, scene.worldLayer, (beam, worldLayer) => {
      beam.destroy();
    });
  }

  update(cursors) {
    if (cursors.left.isDown) {
      this.body.velocity.y = 0;
      this.body.velocity.x = -250;
    } else if (cursors.right.isDown) {
      this.body.velocity.y = 0;
      this.body.velocity.x = 250;
    } else if (cursors.up.isDown) {
      this.body.velocity.y = -250;
      this.body.velocity.x = 0;
    } else if (cursors.down.isDown) {
      this.body.velocity.y = 250;
      this.body.velocity.x = 0;
    }
  }
}

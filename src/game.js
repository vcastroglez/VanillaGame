import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";
import { buildLevel, level1 } from "./levels";

export default class {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    let bricks = buildLevel(this, level1);

    this.gameObjects = [this.paddle, this.ball, ...bricks];
    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach((obj) => obj.update(deltaTime));
    this.gameObjects = this.gameObjects.filter((obj) => !obj.markedForDeletion);
  }

  draw(ctx) {
    this.gameObjects.forEach((obj) => obj.draw(ctx));
  }
}

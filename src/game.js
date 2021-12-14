import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";

export default class {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this.paddle);

    this.gameObjects = [this.paddle, this.ball];
  }

  update(deltaTime) {
    this.gameObjects.forEach((obj) => obj.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach((obj) => obj.draw(ctx));
  }
}

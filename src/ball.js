export default class Ball {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.image = document.createElement("img");
    this.image.src = "src/assets/images/ball.png";
    this.speed = { x: 15, y: 10 };
    this.position = { x: 10, y: 10 };
    this.size = 16;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    //movement
    this.position.x += this.speed.x / deltaTime;
    this.position.y += this.speed.y / deltaTime;

    //wall collision
    if (this.position.x > this.gameWidth - this.size || this.position.x < 0)
      this.speed.x *= -1;
    if (this.position.y > this.gameHeight - this.size || this.position.y < 0)
      this.speed.y *= -1;

    //paddle collision
    const bottomOfBall = this.position.y + this.size;
    const topPaddle = this.game.paddle.position.y;
    const leftOfPaddle = this.game.paddle.position.x;
    const rightOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

    if (
      bottomOfBall >= topPaddle &&
      this.position.x >= leftOfPaddle &&
      this.position.x + this.size <= rightOfPaddle
    ) {
      this.speed.y *= -1;
    }
    //todo :)
  }
}

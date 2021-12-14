export default class Ball {
  constructor() {
    this.image = document.createElement("img");
    this.image.src = "src/assets/images/ball.png";
  }

  draw(ctx) {
    ctx.drawImage(this.image, 10, 10, 16, 16);
  }
}

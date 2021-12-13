import Paddle from "./paddle";
import InputHandler from "./input";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(paddle);

paddle.draw(ctx);

let lastTime = 0;

//images

let imgBall = document.getElementById("img_ball");

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  ctx.drawImage(imgBall, 10, 10, 20, 20);

  requestAnimationFrame(gameLoop);
}

gameLoop();

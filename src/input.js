import game from "./game";

export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 65:
          game.paddle.moveLeft();
          break;
        case 68:
          game.paddle.moveRight();
          break;
        case 27:
          game.togglePause();
          break;
        default:
          console.log("other");
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 65:
          if (game.paddle.speed < 0) game.paddle.stop();
          break;
        case 68:
          if (game.paddle.speed > 0) game.paddle.stop();
          break;
        default:
          console.log("other");
      }
    });
  }
}

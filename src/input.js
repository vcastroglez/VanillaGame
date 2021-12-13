export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      console.log(event.keyCode);
      switch (event.keyCode) {
        case 65:
          paddle.moveLeft();
          break;
        case 68:
          paddle.moveRight();
          break;
        default:
          console.log("other");
      }
    });

    document.addEventListener("keyup", (event) => {
      console.log(event.keyCode);
      switch (event.keyCode) {
        case 65:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 68:
          if (paddle.speed > 0) paddle.stop();
          break;
        default:
          console.log("other");
      }
    });
  }
}

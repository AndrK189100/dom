import Game from "./game/game";

addEventListener("DOMContentLoaded", (event) => {
  const game = new Game(document.querySelector(".playing-field"));

  setInterval(() => {
    game.mooving();
  }, 1000);
});

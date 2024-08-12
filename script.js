const startGameText = document.getElementById("startText");

let gameRunning = false;
let keysPressed = {};

document.addEventListener('keydown', startGame);
document.addEventListener('keydown', handleKeyDown)

const startGame = () => {
  gameRunning = true;
  startGameText.style.display = "none";
  document.removeEventListener("keydown", startGame);

  gameLoop();
};

const gameLoop = () => {
  if (gameRunning) {
    updatePaddle1();
    setTimeout(gameLoop, 8);
  }
};

const handleKeyDown = (e) => {
    keysPressed(e.key) = true;

}

const updatePaddle1 = () => {
    
}

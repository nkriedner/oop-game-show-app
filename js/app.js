// Create a new instance of the Game class:
const game = new Game();

// Add click event listener to start game button:
const startGameBtn = document.getElementById("btn__reset");
startGameBtn.addEventListener("click", function () {
    console.log("start game button was clicked");
    game.startGame();
});

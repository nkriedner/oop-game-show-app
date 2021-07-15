// Variable for new instance of Game class:
let game;

// Start button click event handler:
const startGameBtn = document.getElementById("btn__reset");
startGameBtn.addEventListener("click", function () {
    console.log("start game button was clicked");
    game = new Game();
    game.resetGame();
    game.startGame();
});

// Onscreen keyboard click event handler:
document.getElementById("qwerty").addEventListener("click", (e) => {
    // Capture chosen letter:
    const chosenLetter = e.target.textContent;
    console.log("chosenLetter:", chosenLetter);

    // Check that no space was clicked (space click's 'e.target' have the keyrow class):
    if (e.target.className !== "keyrow") {
        // No space was clicked -> calls handleInteraction()
        game.handleInteraction(e.target);
    } else {
        // Space was clicked:
        console.log("KEYROW SPACE WAS CLICKED");
    }
});

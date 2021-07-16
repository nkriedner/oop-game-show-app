// Variable for new instance of Game class:
let game;

// Start button click event handler:
const startGameBtn = document.getElementById("btn__reset");
startGameBtn.addEventListener("click", function () {
    game = new Game();
    game.resetGame();
    game.startGame();
});

// Onscreen keyboard click event handler:
document.getElementById("qwerty").addEventListener("click", (e) => {
    // Capture chosen letter:
    const chosenLetter = e.target.textContent;

    // Check that no space was clicked (space click's 'e.target' have the keyrow class):
    if (e.target.className !== "keyrow") {
        // No space was clicked -> calls handleInteraction()
        game.handleInteraction(e.target);
    }
});

// Computer keyboard event handler:
document.addEventListener("keyup", (e) => {
    // Capture chosen keyboard input:
    const chosenLetter = e.key;
    // Define variable for chosen letter button:
    let chosenLetterButton;
    // Check if the keyboard input is a key letter on screenboard:
    // 1) Loop through key button:
    const keyButtons = document.querySelectorAll(".key");
    // 2) Loop through keyButtons and set chosenLetterButon to corresponding letter button:
    for (let i = 0; i < keyButtons.length; i++) {
        if (keyButtons[i].textContent === chosenLetter) {
            chosenLetterButton = keyButtons[i];
            game.handleInteraction(chosenLetterButton);
        }
    }
});

// Create a new instance of the Game class:
// const game = new Game();
let game;

// Add click event listener to start game button:
const startGameBtn = document.getElementById("btn__reset");
startGameBtn.addEventListener("click", function () {
    console.log("start game button was clicked");
    game = new Game();
    game.startGame();
});

// Add onscreen keyboard click event handler:
document.getElementById("qwerty").addEventListener("click", (e) => {
    // console.log("e:", e);
    console.log("e.target:", e.target);
    // console.log("e.target.textContent:", e.target.textContent);

    // Capture the chosen letter
    const chosenLetter = e.target.textContent;
    console.log("chosenLetter:", chosenLetter);

    // Check that no space was clicked (space click's e.target have the keyrow class):
    if (e.target.className !== "keyrow") {
        // console.log("no keyrow class");
        // console.log("e.target.className:", e.target.className);
        // e.target.className = e.target.className + " chosen";
        // console.log("e.target.className:", e.target.className);
        game.handleInteraction(e.target);
    } else {
        // console.log("e.target.className:", e.target.className);
        console.log("KEYROW SPACE WAS CLICKED");
    }
});

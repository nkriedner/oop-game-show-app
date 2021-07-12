// Create a new instance of the Game class:
const game = new Game();

// Add click event listener to start game button:
const startGameBtn = document.getElementById("btn__reset");
startGameBtn.addEventListener("click", function () {
    console.log("start game button was clicked");
    game.startGame();
});

// Add click event listener to each onscreen keyboard buttons:
// const keys = document.querySelectorAll(".key");
// keys.forEach((key) => {
//     console.log(key);
// });
document.getElementById("qwerty").addEventListener("click", (e) => {
    console.log("e.target.textContent:", e.target.textContent);
    console.log("e.target:", e.target);
    console.log("e.target.className:", e.target.className);
    // Check that no space was clicked (space click's e.target have the keyrow class):
    if (e.target.className !== "keyrow") {
        console.log("no keyrow class");
        game.handleInteraction(e.target.textContent);
    }
});

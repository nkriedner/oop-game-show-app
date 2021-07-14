// Create a new instance of the Game class:
const game = new Game();

// Add click event listener to start game button:
const startGameBtn = document.getElementById("btn__reset");
startGameBtn.addEventListener("click", function () {
    console.log("start game button was clicked");
    game.startGame();
});

document.getElementById("qwerty").addEventListener("click", (e) => {
    console.log("e.target.textContent:", e.target.textContent);
    console.log("e.target:", e.target);
    console.log("e.target.className:", e.target.className);
    console.log("e:", e);
    console.log(e.target.classlist);
    // Check that no space was clicked (space click's e.target have the keyrow class):
    if (e.target.className !== "keyrow") {
        console.log("no keyrow class");
        console.log(e.target);
        e.classlist.add("chosen");
        game.handleInteraction(e.target);
    }
});

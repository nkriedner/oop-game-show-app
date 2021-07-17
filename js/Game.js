class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {
                phrase: "We are all one",
            },
            {
                phrase: "I see the divine in you",
            },
            {
                phrase: "Surrendering liberates",
            },
            {
                phrase: "How about now",
            },
            {
                phrase: "Everything is possible",
            },
        ];
        this.activePhrase = null;
    }
    startGame() {
        // Hide the start screen overlay:
        document.getElementById("overlay").style.display = "none";
        // Set the activePhrase to a random phrase:
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase(randomPhrase);
        // Add phrase to display:
        this.activePhrase.addPhraseToDisplay(this.activePhrase.phrase);
        console.log(
            "In case you want to cheat, the random phrase is:",
            this.activePhrase
        );
    }
    getRandomPhrase() {
        // Create a random number between 1 and the length of the phrase:
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        // Return a phrase based on the random number:
        return this.phrases[randomNumber];
    }
    handleInteraction(clickedLetter) {
        // Check that clicked letter is not disabled (for keyup events):
        if (clickedLetter.disabled === false) {
            // Disable the clicked keyboard button:
            clickedLetter.disabled = true;
            // Check 2: If phrase does not include guessed letter:
            if (!this.activePhrase.phrase.includes(clickedLetter.textContent)) {
                // Add wrong class styling to selected letter's keyboard button:
                clickedLetter.classList.add("wrong");
                // Remove a heart life:
                this.removeLife();
            } else {
                // Add chosen class to selected letter's keyboard button:
                clickedLetter.classList.add("chosen");
                // Show matching letter on screen:
                this.activePhrase.showMatchedLetter(clickedLetter.textContent);
                // Check for win:
                if (this.checkForWin()) {
                    this.gameOver("win");
                    this.resetGame();
                }
            }
        }
    }
    checkForWin() {
        // Check if player has revealed all letters in phrase:
        // 1) Select the letter placeholders array and define variable for number of hide classes:
        const letterPlaceholder = document.querySelectorAll("#phrase ul li");
        let numberOfHideClasses = 0;
        // 2) Loop through the letterPlacholder list:
        for (let i = 0; i < letterPlaceholder.length; i++) {
            // Check if this placeholder has hide class:
            if (letterPlaceholder[i].classList.contains("hide")) {
                numberOfHideClasses++;
            }
        }
        // 3) Check the number of hide classes:
        if (numberOfHideClasses === 0) {
            // If there is no hide class -> return TRUE (= win)
            return true;
        } else {
            // If there is a hide class -> return FALSE (= lose)
            return false;
        }
    }
    removeLife() {
        // Increment the missed variable:
        this.missed++;
        // Replace lifeHeart.png with lostHeart.png:
        // 1) Select the imgs:
        const heartImgs = document.querySelectorAll(".tries img");
        // 2) Loop through heartImgs and replace the first img that is ot lifeHeart.png:
        for (let i = 0; i < heartImgs.length; i++) {
            if (heartImgs[i].getAttribute("src") === "images/liveHeart.png") {
                heartImgs[i].setAttribute("src", "images/lostHeart.png");
                break;
            }
        }
        // Check if all 5 lifes have been lost:
        if (this.missed > 4) {
            this.gameOver("lose");
            this.resetGame();
        }
    }
    gameOver(winOrLose) {
        console.log("GAME OVER!!!");
        // Select overlay and display original start screen overlay:
        const overlay = document.getElementById("overlay");
        overlay.style.display = "flex";
        // Update overlay h1 with friendly win / lose message:
        let gameOverMessage;
        if (winOrLose === "win") {
            gameOverMessage = "You win!!!";
        } else if (winOrLose === "lose") {
            gameOverMessage = "You lose!!!";
        }
        document.getElementById("game-over-message").textContent =
            gameOverMessage;
        // Replace overlay start class with win/lose class
        overlay.className = winOrLose;
    }
    resetGame() {
        // Remove all phrase letter placeholders:
        const ul = document.querySelector("#phrase ul");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        // Select and reset all keyboard screen buttons:
        const keyboardBtns = document.querySelectorAll(".keyrow button");
        keyboardBtns.forEach((btn) => {
            btn.className = "key";
            btn.disabled = false;
        });
        // Replace all heart img src with lifeHeart.png:
        const heartImgs = document.querySelectorAll(".tries img");
        for (let i = 0; i < heartImgs.length; i++) {
            heartImgs[i].setAttribute("src", "images/liveHeart.png");
        }
    }
}

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
        this.activePhrase = this.getRandomPhrase();
        // Add phrase to display:
        this.activePhrase.addPhraseToDisplay(this.activePhrase.phrase);
    }
    getRandomPhrase() {
        // Create a random number between 1 and the length of the phrase:
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        // Return a phrase based on the random number:
        const randomPhrase = new Phrase(this.phrases[randomNumber]);
        console.log(
            "In case you want to cheat, the random phrase is:",
            randomPhrase.phrase
        );
        return randomPhrase;
    }
    handleInteraction(clickedLetter) {
        // Check if clicked letter was disabled (= without key class):
        // Only if they are not disabled runs the rest of the checks ->
        if (clickedLetter.classList.contains("key")) {
            // Disable the clicked letter's onscreen keyboard function:
            clickedLetter.classList.remove("key");

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
        // Check if all 5 lifes have been lost:
        if (this.missed > 4) {
            this.gameOver("lose");
        }
        // Replace lifeHeart.png with lostHeart.png:
        // 1) Select the imgs:
        const heartImgs = document.querySelectorAll(".tries img");
        // 2) Loop through heartImgs and replace the first img that is ot lifeHeart.png:
        for (let i = 0; i < heartImgs.length; i++) {
            if (heartImgs[i].getAttribute("src") === "images/liveHeart.png") {
                heartImgs[i].setAttribute("src", "images/lostHeart.png");
                return;
            }
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
        });
        // Replace all heart img src with lifeHeart.png:
        const heartImgs = document.querySelectorAll(".tries img");
        for (let i = 0; i < heartImgs.length; i++) {
            heartImgs[i].setAttribute("src", "images/liveHeart.png");
        }
    }
}

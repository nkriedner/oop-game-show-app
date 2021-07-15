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
        // Hide the start screen overlay
        document.getElementById("overlay").style.display = "none";
        // Set the activePhrase to a random phrase:
        this.activePhrase = this.getRandomPhrase();
        // Add phrase to display:
        // -> Call addPhraseToDisplay() on the activePhrase property
        this.activePhrase.addPhraseToDisplay(this.activePhrase.phrase);
        // phrase.addPhraseToDisplay(this.activePhrase);
    }
    getRandomPhrase() {
        // Create a random number between 1 and the length of the phrase:
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        // Return a phrase based on the random number:
        const randomPhrase = new Phrase(this.phrases[randomNumber]);
        console.log("Random Phrase:", randomPhrase.phrase);
        // return this.phrases[randomNumber]; // <- Check
        return randomPhrase;
    }
    handleInteraction(clickedLetter) {
        console.log("handleInteraction() was called on button:", clickedLetter);
        // Disable the clicked letter's onscreen keyboard function:
        // ->

        // If phrase does not include guessed letter:
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
    checkForWin() {
        console.log("checkForWin() was called");
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
            // If there is no hide class -> return TRUE
            return true;
        } else {
            // If there is a hide class -> return FALSE
            return false;
        }
    }
    removeLife() {
        console.log("removeLife() was activated");
        // Increment the missed variable:
        this.missed++;
        console.log("this.missed:", this.missed);
        // Check if all 5 lifes have been lost:
        if (this.missed > 4) {
            console.log("more than 4 misses");
            this.gameOver("lose");
        }
        // Replace lifeHeart.png with lostHeart.png:
        // 1) Select the imgs:
        const heartImgs = document.querySelectorAll(".tries img");
        // 2) Loop through heartImgs and replace the first img that is ot lifeHeart.png:
        for (let i = 0; i < heartImgs.length; i++) {
            console.log(heartImgs[i].getAttribute("src"));
            if (heartImgs[i].getAttribute("src") === "images/liveHeart.png") {
                heartImgs[i].setAttribute("src", "images/lostHeart.png");
                return;
            }
        }
    }
    gameOver(winOrLose) {
        console.log("GAME OVER!!!");
        // Display original start screen overlay:
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
}

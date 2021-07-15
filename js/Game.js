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
        // If the phrase does not include guessed letter:

        console.log(
            "this.activePhrase.phrase.includes(clickedLetter.textContent):",
            this.activePhrase.phrase.includes(clickedLetter.textContent)
        );

        if (!this.activePhrase.phrase.includes(clickedLetter.textContent)) {
            console.log("FALSE");
            // Add wrong class to selected letter's keyboard button:
            clickedLetter.classList.add("wrong");
            console.log("clickedLetter.className:", clickedLetter.className);
            // Call removeLife() function:
            // ->
        } else {
            console.log("TRUE");
            // Add chosen class to selected letter's keyboard button:
            clickedLetter.classList.add("chosen");
            // Call showMatchedLetter()
            this.activePhrase.showMatchedLetter(clickedLetter.textContent);
            // Check for win
            // ->
        }
    }
}

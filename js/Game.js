class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            "We are all one",
            "I see the divine in you",
            "How about now",
            "Surrendering liberates",
            "Everything is possible",
        ];
        this.activePhrase = null;
    }
    startGame() {
        // Hide the start screen overlay
        document.getElementById("overlay").style.display = "none";
        // Set the activePhrase to a random phrase:
        this.activePhrase = this.getRandomPhrase();
        // Add phrase to board:
        // -> Call addPhraseToDisplay() on the activePhrase property
        // phrase.addPhraseToDisplay(this.activePhrase);
    }
    getRandomPhrase() {
        // Create a random number between 1 and the length of the phrase:
        const randomNumber = Math.floor(
            Math.random() * this.phrases.length + 1
        );
        // Return a phrase based on the random number:
        const randomPhrase = new Phrase(this.phrases[randomNumber]);
        // return this.phrases[randomNumber]; // <- Check
        return randomPhrase;
    }
    handleInteraction(clickedLetter) {
        console.log("handleInteraction() was called on button:", clickedLetter);
        // Disable the clicked letter's onscreen keyboard function:
        // ->
        // If the phrase does not include guessed letter add wrong class to
    }
}

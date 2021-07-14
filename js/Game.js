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
        // this.phrases = [
        //     "We are all one",
        //     "I see the divine in you",
        //     "How about now",
        //     "Surrendering liberates",
        //     "Everything is possible",
        // ];
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
        if (!this.activePhrase.phrase.includes(clickedLetter.textContent)) {
            // Add wrong class to selected letter's keyboard button:
            console.log(clickedLetter);
            clickedLetter.classlist.add("wrong");
            // Call removeLife() function:
            // ->
        } else {
            // Add chosen class to selected letter's keyboard button:
            console.log(clickedLetter);
            clickedLetter.classlist.add("chosen");
            // Call showMatchedLetter()
            this.activePhrase.showMatchedLetter(clickedLetter.textContent);
            // Check for win
            // ->
        }
    }
}

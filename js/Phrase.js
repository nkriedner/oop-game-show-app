/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(phrase) {
        // Grab hold of the place where to put the li's
        const ul = document.querySelector("#phrase ul");
        // Create letter array from phrase string:
        const phraseArray = phrase.split("");
        // Create an li for each letter:
        phraseArray.forEach(function (letter) {
            console.log(letter);
            const li = document.createElement("li");
            // If letter is a space:
            if (letter === " ") {
                li.className = "space";
            } else {
                li.classList.add("hide", "letter", letter);
            }
            // Append the li to the ul:
            ul.appendChild(li);
        });
    }
}

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(phrase) {
        // Grab hold of the place where to put the li's of phrase:
        const ul = document.querySelector("#phrase ul");
        // Create letter array from phrase string:
        const phraseArray = phrase.phrase.split("");
        // Create an li for each letter:
        phraseArray.forEach(function (letter) {
            const li = document.createElement("li");
            // If letter is a space:
            if (letter === " ") {
                li.className = "space";
            } else {
                li.classList.add("hide", "letter", letter);
                li.textContent = letter;
            }
            // Append the li to the ul:
            ul.appendChild(li);
        });
    }
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
    showMatchedLetter(letter) {
        // Select the list items with the phrase letters:
        const lis = document.querySelectorAll("#phrase ul li");
        // Loop through the list and check if an item has a letter class:
        for (let i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains(letter)) {
                lis[i].classList.remove("hide");
                lis[i].classList.add("show");
            }
        }
    }
}

const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
const cardContent = document.getElementById("card-content");

function displayCard() {
    const currentCard = flashcards[currentIndex];
    if (showingTerm) {
        cardContent.textContent = currentCard.term;
    }
    else {
        cardContent.textContent = currentCard.definition;
    }
}

const prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener("click", ()=> {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true;
    displayCard();
})

const flashcard = document.getElementById("flashcard");
flashcard.addEventListener("click", ()=> {
    if (showingTerm === false) {
        showingTerm = true;
    }
    else {
        showingTerm = false;
    }

    displayCard();
})

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", ()=> {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingTerm = true;
    displayCard();
})

const addCardBtn = document.getElementById("add-card-btn");
const newTerm = document.getElementById("new-term");
const newDefinition = document.getElementById("new-definition");
addCardBtn.addEventListener("click", ()=> {
    const term = newTerm.value;
    const definition = newDefinition.value;
    flashcards.push({term, definition});
    currentIndex = flashcards.length - 1;
    showingTerm = true;
    displayCard();
})

// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;

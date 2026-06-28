const flashcards = [
  "What are the two ways to write comments in Javascript?",
  "What is the difference between const, let and var?",
  "List all the primitive data types in Javascript.",
  "How can you check the data type of something in javascript?",
  "What is the difference between double quotes, single quotes and backticks?",
  "What is a template literal?",
  "What happens if you add a number data type to a string data type?",
  "Explain the modulus operator",
];

let currentCardIndex = 0;

const cardDisplay = document.getElementById("cardDisplay");
const cardCounterDisplay = document.querySelector(".counter");
const progressPercentDisplay = document.querySelector(".progress-fill");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", function () {

    cardDisplay.innerHTML = flashcards[currentCardIndex];

    cardCounterDisplay.innerHTML =
        `Card ${currentCardIndex + 1} of ${flashcards.length}`;

    const progressPercent =
        ((currentCardIndex + 1) / flashcards.length) * 100;

    progressPercentDisplay.style.width = progressPercent + "%";

    currentCardIndex =
        (currentCardIndex + 1) % flashcards.length;
});

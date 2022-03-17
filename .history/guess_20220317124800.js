let randomNumber = Math.floor(Math.random() * 10 + 1);
let guesses = [];
const guessInput = document.getElementById("guessInput");
const currentGuess = Number(guessInput.value);
const resultsDiv = document.getElementById("results");
const submitButton = document.getElementById("submitBtn");
const p = document.createElement("p");

function checkGuess(guess, rng) {
    if (guess == rng) {
        p.innerText = "You won. Good job!";
        resultsDiv.append(p);
    }
    if (guess < rng) {
        guesses.push(currentGuess);
        p.innerText = "Too low. Try again!";
        resultsDiv.append(p);
    }
    if (guess > rng) {
        guesses.push(currentGuess);
        p.innerText = "Too high. Try again!";
        resultsDiv.append(p);
    }
}

// submitButton.addEventListener("click", checkGuess(currentGuess, randomNumber));
//logging random number for debugging. DELETE LATER
console.log(randomNumber);
console.log(guesses);
console.log(currentGuess);

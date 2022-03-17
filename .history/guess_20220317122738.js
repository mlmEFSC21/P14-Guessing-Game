let randomNumber = Math.floor(Math.random() * 10 + 1);
let guesses = [];
const currentGuess = document.getElementById("guessInput");
const results = document.getElementById("results");
const submitButton = document.getElementById("submitBtn");
const p = document.createElement("p");

function checkGuess(guess, rng) {
    if (guess == rng) {
        p.innerText = "You won. Good job!";
        results.append(p);
    }
    if (guess < rng) {
        guesses.push(currentGuess);
        p.innerText = "Too low. Try again!";
        results.append(p);
    }
    if (guess > rng) {
        guesses.push(currentGuess);
        p.innerText = "Too high. Try again!";
        results.append(p);
    }
}

//logging random number for debugging. DELETE LATER
console.log(randomNumber);
console.log(guesses);
console.log(currentGuess);

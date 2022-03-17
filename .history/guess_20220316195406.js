let randomNumber = Math.floor(Math.random() * 1000 + 1);
let guesses = [];
let currentGuess;
let results = document.getElementById("results");

function getGuess() {
    currentGuess = parseInt(prompt("Pick a number between 1 and 1000 (inclusive)!"));
}

function checkGuess(guess, rng) {
    if (guess == rng) {
        results.innerHTML = "<p>You won. Good job!</p>";
    } else if (guess < rng) {
        guesses.push(guess);
        results.innerHTML = "<p>Too low. Try again!";
        getGuess();
    } else {
        guesses.push(guess);
        results.innerHTML = "<p>Too high. Try again!";
        getGuess();
    }
}

getGuess();
checkGuess(currentGuess, randomNumber);

//logging random number for debugging. DELETE LATER
console.log(randomNumber);
console.log(guesses);
console.log(currentGuess);

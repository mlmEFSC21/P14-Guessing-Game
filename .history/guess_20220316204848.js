let randomNumber = Math.floor(Math.random() * 10 + 1);
let guesses = [];
let currentGuess;
const results = document.getElementById("results");
const p = document.createElement("p");

function getGuess() {
    currentGuess = parseInt(prompt("Pick a number between 1 and 1000 (inclusive)!"));
}

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
//get first guess
getGuess();
//check first guess, implement recursion
checkGuess(currentGuess, randomNumber);
//logging random number for debugging. DELETE LATER
console.log(randomNumber);
console.log(guesses);
console.log(currentGuess);

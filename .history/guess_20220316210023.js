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
        return true;
    }
    if (guess < rng) {
        guesses.push(currentGuess);
        p.innerText = "Too low. Try again!";
        results.append(p);
        return false;
    }
    if (guess > rng) {
        guesses.push(currentGuess);
        p.innerText = "Too high. Try again!";
        results.append(p);
        return false;
    }
}
//get first guess

do {
    getGuess();
    checkGuess(currentGuess, randomNumber);
} while (checkGuess(currentGuess, randomNumber)=false);

//logging random number for debugging. DELETE LATER
console.log(randomNumber);
console.log(guesses);
console.log(currentGuess);

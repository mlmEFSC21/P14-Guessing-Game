let randomNumber = Math.floor(Math.random() * 1000 + 1);
let guesses = [];
let currentGuess;
const results = document.getElementById("results");
const p = document.createElement("p");

function getGuess() {
    currentGuess = parseInt(prompt("Pick a number between 1 and 1000 (inclusive)!"));
}

function checkGuess(guess, rng) {
    while (guess != rng) {
        if (guess == rng) {
            p.innerText = "You won. Good job!";
        } else if (guess < rng) {
            guesses.push(currentGuess);
            p.innerText = "Too low. Try again!";
            results.append(p);
            getGuess();
        } else {
            guesses.push(currentGuess);
            p.innerText = "Too high. Try again!";
            results.append(p);
            getGuess();
        }
    }
}

getGuess();

checkGuess(currentGuess, randomNumber);

//logging random number for debugging. DELETE LATER
console.log(randomNumber);
console.log(guesses);
console.log(currentGuess);

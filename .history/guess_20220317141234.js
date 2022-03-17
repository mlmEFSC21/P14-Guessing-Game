let randomNumber = Math.floor(Math.random() * 10 + 1);
let guesses = [];

const guessInput = document.getElementById("guessInput");
const resultsDiv = document.getElementById("results");
const submitButton = document.getElementById("submitBtn");
const resetButton = document.getElementById("resetBtn");
const p = document.createElement("p");
const ul = document.getElementById("guessList");
const li = document.createElement("li");

function checkGuess() {
    const currentGuess = Number(guessInput.value);
    if (currentGuess == randomNumber) {
        guesses.push(currentGuess);
        p.innerText = "Congratulations! You guessed the number!";
        resultsDiv.append(p);
        let numOfGuesses = guesses.length;
        console.log(`It took you ${numOfGuesses} guesses!`);
    }
    if (currentGuess < randomNumber) {
        guesses.push(currentGuess);
        p.innerText = "Too low. Try again!";
        resultsDiv.append(p);
        trackGuesses();
    }
    if (currentGuess > randomNumber) {
        guesses.push(currentGuess);
        p.innerText = "Too high. Try again!";
        resultsDiv.append(p);
        trackGuesses();
    }
}

function trackGuesses() {
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    for (i = 0; i <= guesses.length - 1; i++) {
        let li = document.createElement("li");
        li.innerText = guesses[i];
        ul.appendChild(li);
    }
}

function newRNG() {
    randomNumber = Math.floor(Math.random() * 10 + 1);
}

function resetGame() {
    p.innerText = "";
    resultsDiv.append(p);
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    guesses = [];
    newRNG();
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
//logging random number for debugging. DELETE LATER
console.log(randomNumber);
console.log(guesses);

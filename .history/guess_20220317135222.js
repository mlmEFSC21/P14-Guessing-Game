let randomNumber = Math.floor(Math.random() * 10 + 1);
let guesses = [];
let numOfGuesses = guesses.length;
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
        console.log(`It took you ${numOfGuesses} guesses!`);
    }
    if (currentGuess < randomNumber) {
        guesses.push(currentGuess);
        li.innerText = currentGuess;
        p.innerText = "Too low. Try again!";
        resultsDiv.append(p);
        ul.appendChild(li);
        console.log(guesses);
    }
    if (currentGuess > randomNumber) {
        guesses.push(currentGuess);
        li.innerText = currentGuess;
        p.innerText = "Too high. Try again!";
        resultsDiv.append(p);
        ul.appendChild(li);
        console.log(guesses);
    }
}

function resetGame() {
    p.innerText = "";
    resultsDiv.append(p);
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    guesses = [];
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
//logging random number for debugging. DELETE LATER
console.log(randomNumber);
console.log(guesses);

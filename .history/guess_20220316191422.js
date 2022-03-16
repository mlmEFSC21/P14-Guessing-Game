let guesses = [];
// let currentGuess = parseInt(prompt("Pick a number between 1 and 1000 (inclusive)!"));

for (i = 0; i < 1000; i++) {
    let randomNumber = Math.floor(Math.random() * 1000 + 1);
    console.log(randomNumber);
    guesses[i] = randomNumber;
}

console.log(guesses);
// console.log(currentGuess);

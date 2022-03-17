let randomNumber = Math.floor(Math.random() * 1000 + 1);
let guesses = [];
let currentGuess = parseInt(prompt("Pick a number between 1 and 1000 (inclusive)!"));
guesses.push(currentGuess);
//logging random number for debugging. DELETE LATER
console.log(randomNumber);
console.log(guesses);
console.log(currentGuess);

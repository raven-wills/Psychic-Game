var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var guessesLeft = 9;
var wins = 0;
var losses = 0;
var answerIndex = [Math.floor(Math.random() * alphabet.length)];
var answer = alphabet[answerIndex];

var alreadyGuessed = [];

console.log(answer);
document.querySelector("#guessesLeft").textContent = guessesLeft;
document.querySelector("#wins").textContent = wins;
document.querySelector("#losses").textContent = losses;
document.querySelector("#alreadyGuessed").textContent = alreadyGuessed;

function keyPressed(e) {
  if (answer === e.key) {
    wins++;
    document.querySelector("#wins").textContent = wins;
    answerIndex = [Math.floor(Math.random() * alphabet.length)];
    answer = alphabet[answerIndex];
    console.log(answer);
  } else {
    guessesLeft--;
    if (guessesLeft < 0) {
      losses++;
      document.querySelector("#losses").textContent = losses;
      guessesLeft = 9;
      alreadyGuessed = [];
      answerIndex = [Math.floor(Math.random() * alphabet.length)];
      answer = alphabet[answerIndex];
    }
    document.querySelector("#guessesLeft").textContent = guessesLeft;
    alreadyGuessed.push(e.key);
    document.querySelector("#alreadyGuessed").textContent = alreadyGuessed;
  }
}

document.addEventListener("keypress", keyPressed);

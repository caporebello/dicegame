// First dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var firstDice = "dice" + randomNumber1 + ".png";
var newFirstDice = "images/" + firstDice;
var newFirstImage = document.querySelectorAll("img")[0];
newFirstImage.setAttribute("src", newFirstDice);

// Second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var secondDice = "dice" + randomNumber2 + ".png";
var newSecondDice = "images/" + secondDice;
var newSecondImage = document.querySelectorAll("img")[1].setAttribute("src", newSecondDice);

if (randomNumber1 === randomNumber2) {
document.querySelector("h1").innerHTML = "It's a Draw";
} else if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
document.querySelector("h1").innerHTML = "Play Again";
}

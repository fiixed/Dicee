/*jshint esversion: 6 */

var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var i1 = document.querySelector(".img1");
var i2 = document.querySelector(".img2");
var h = document.querySelector("h1");

i1.setAttribute("src", `images/dice${randomNumber1}.png`);
i2.setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  h.innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  h.innerHTML = "Player 2 Wins!";
} else {
  h.innerHTML = "Draw!";
}

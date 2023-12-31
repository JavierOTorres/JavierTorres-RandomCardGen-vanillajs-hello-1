import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function newCard() {
  const symbols = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const cardTopElement = document.querySelector(".top");
  const cardNumberElement = document.querySelector(".number");
  const cardBottomElement = document.querySelector(".bottom");

  const randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
  const randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

  cardTopElement.innerHTML = randomSymbols;
  cardNumberElement.innerHTML = randomNumbers;
  cardBottomElement.innerHTML = randomSymbols;

  if (randomSymbols === "♦" || randomSymbols === "♥") {
    cardTopElement.classList.add("red");
    cardNumberElement.classList.add("red");
    cardBottomElement.classList.add("red");
  } else {
    cardTopElement.classList.remove("red");
    cardNumberElement.classList.remove("red");
    cardBottomElement.classList.remove("red");
  }
};

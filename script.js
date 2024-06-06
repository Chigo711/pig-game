"use strict";
// The Beginning of Selectors
const rollDice = document.querySelector(".roll-dice");
const dice = document.querySelector(".dice");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const holdBtn = document.querySelector(".hold");
const resetBtn = document.querySelector(".new-game");
// The end of Selectors

score0El.textContent = 0;
score1El.textContent = 0;

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// THE PLAYING LOGIC

let playing = true;

// THE SWITCH PLAYER FUNCTION TO KEEP THE CODE DRY
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// The beginning of conditioning and functionalities
rollDice.addEventListener("click", () => {
  if (playing) {
    // AS LONG AS THE PLAYING HERE IS TRUE THE CODES BELOW IT WILL RUN
    const numbers = Math.trunc(Math.random() * 6) + 1;
    console.log(numbers);

    dice.classList.remove("hide-dice");
    dice.src = `images/dice-${numbers}.png`;

    if (numbers !== 1) {
      currentScore += numbers;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", () => {
  if (playing) {
    // THE SAME LOGIC APPLIES HERE AS LONG AS THE PLAYING IS TRUE THESE CODES WILL RUN. THE LOGIC IS TO MAKE THE ROLL BUTTON AND THE HOLD BUTTON STOP WORKING ONCE THERE IS A WINNER OF THE GAME.
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      // ONCE THE PLAYING LOGIC BECOMES FALSE THE ROLLDICE AND THE HOLD BUTTON WILL NOT WORK BECAUSE CLEARLY THERE HAVE BEEN A WINNER
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("winner");
    } else {
      switchPlayer();
    }
  }
});

const showText1 = document.querySelector(".show1");
const showText2 = document.querySelector(".show2");
const showText3 = document.querySelector(".show3");
const showText4 = document.querySelector(".show4");

resetBtn.addEventListener("click", () => {
  playing = true;
  document;
  // .querySelector(`.player--${activePlayer}`)
  // .classList.add("player--active");
  document.querySelector(`.player--${activePlayer}`).classList.remove("winner");
  // activePlayer = 0;
  document.getElementById(`score--${activePlayer}`).textContent = currentScore;
});
let details = prompt("Enter something");
const myObject = {
  name: "Emmanuel",
  age: 2023 - 1999,
  company: "Corat",
};

alert(myObject[details]);

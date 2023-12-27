'use strict';

const name = [];
const playerSelector = document.querySelectorAll('.player');
const nameSelector = document.querySelectorAll('.name');
const scoreSelector = document.querySelectorAll('.score');
const currentScoreSelector = document.querySelectorAll('.current-score');
const diceSelector = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const message = document.querySelector('.message');

//console.log('score', scoreSelector);
scoreSelector[0].textContent = 0;
scoreSelector[1].textContent = 0;

const addActive = player => {
  playerSelector[player].classList.add('player--active');
};

const removeActive = player => {
  playerSelector[player].classList.remove('player--active');
};

const rollDice = () => {
  message.textContent = '';
  playerRoll = Math.trunc(Math.random() * 6) + 1;
  diceSelector.src = 'dice-' + playerRoll + '.png';
  if (playerRoll === 1) {
    changePlayer();
  }
};

const changePlayer = () => {
  playerRoll = 0;
  removeActive(playerActive);
  if (playerActive === 0) playerActive = 1;
  else playerActive = 0;
  addActive(playerActive);
};

const holdDice = () => {
  if (playerRoll === 0) {
    message.textContent = "you didn't roll... very much iq";
  } else {
    if (playerActive === 0) {
      player1Score += playerRoll;
      scoreSelector[playerActive].textContent = player1Score;
      console.log(player1Score);
    } else {
      player2Score += playerRoll;
      scoreSelector[playerActive].textContent = player2Score;
      console.log(player2Score);
    }
    changePlayer();
  }
};

let playerActive = 0;
let playerRoll = 0;
let player1Score = 0;
let player2Score = 0;

btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdDice);

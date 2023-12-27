'use strict';

const changeMessageElement = message =>
  (document.querySelector('.message').textContent = message);
const changeNumberElement = number =>
  (document.querySelector('.number').textContent = number);
const changeBackgroundColor = color =>
  (document.querySelector('body').style.backgroundColor = color);
const changeScoreElement = score =>
  (document.querySelector('.label-score').textContent = '💯 Score: ' + score);
const changeHighscoreElement = highscore =>
  (document.querySelector('.label-highscore').textContent =
    '🥇 Highscore: ' + highscore);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let points = 20;
let highscore = localStorage.getItem('highscore');

document.querySelector('.label-highscore').textContent =
  '🥇 Highscore: ' + highscore;

const updateNumber = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (guess === secretNumber) {
    changeNumberElement(guess);
    changeMessageElement('🎉 congrats you found it');
    setHighscore(points);
    changeBackgroundColor('#60b347');
  } else if (guess < 0 || guess > 20) {
    changeMessageElement('someone cannot read....');
  } else if (guess < secretNumber) {
    changeMessageElement('📈 its higher');
    points--;
  } else if (guess > secretNumber) {
    changeMessageElement('📉its lower');
    points--;
  } else {
    changeMessageElement('⛔️ No number');
  }
  changeScoreElement(points);
  if (points < 1) {
    changeMessageElement(
      '💥 Wow you managed to not guess the number between 1 and 20 in 20 tries??'
    );
    changeBackgroundColor('#FF8888');
  }
};

const setHighscore = points => {
  if (points > highscore) {
    highscore = points;
    changeHighscoreElement(points);
    localStorage.setItem('highscore', points);
  }
};

const resetNoReload = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  points = 20;
  highscore = localStorage.getItem('highscore');

  changeScoreElement(points);
  document.querySelector('.number').textContent = '?';
  changeMessageElement('Start guessing...');
  changeHighscoreElement(highscore);
  document.querySelector('.guess').value = undefined;
  changeBackgroundColor('#222');
};

document.querySelector('.check').addEventListener('click', updateNumber);
document.querySelector('.again').addEventListener('click', resetNoReload);

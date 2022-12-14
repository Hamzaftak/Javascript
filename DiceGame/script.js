'use strict';

const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const layP0 = document.querySelector('.player--0');
const layP1 = document.querySelector('.player--1');

let totalCurrent = 0;
let score = 0;

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

btnDice.addEventListener('click', function () {
  let dice = Math.trunc(6 * Math.random()) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (layP0.classList.contains('player--active')) {
    if (dice === 1) {
      totalCurrent = 0;
      layP0.classList.remove('player--active');
      layP1.classList.add('player--active');
    } else {
      totalCurrent = dice + totalCurrent;
    }
    currentEl0.textContent = totalCurrent;
  } else {
    if (dice === 1) {
      totalCurrent = 0;
      layP0.classList.add('player--active');
      layP1.classList.remove('player--active');
    } else {
      totalCurrent = dice + totalCurrent;
    }
    currentEl1.textContent = totalCurrent;
  }
});

btnHold.addEventListener('click', function () {
  if (layP0.classList.contains('player--active')) {
    score = Number(scoreEl0.textContent);
    currentEl0.textContent = 0;
    if (score + totalCurrent >= 100) {
      scoreEl0.textContent = 'Winner 😁';
      scoreEl1.textContent = 'Looser 😭';
      btnDice.disabled = true;
      btnHold.disabled = true;
    } else {
      scoreEl0.textContent = totalCurrent + score;
      layP0.classList.remove('player--active');
      layP1.classList.add('player--active');
    }
  } else {
    score = Number(scoreEl1.textContent);
    currentEl1.textContent = 0;
    if (score + totalCurrent >= 100) {
      scoreEl1.textContent = 'Winner 😁';
      scoreEl0.textContent = 'Looser 😭';
      btnDice.disabled = true;
      btnHold.disabled = true;
    } else {
      scoreEl1.textContent = totalCurrent + score;
      layP0.classList.add('player--active');
      layP1.classList.remove('player--active');
    }
  }
  totalCurrent = 0;
});

btnNew.addEventListener('click', function () {
  totalCurrent = 0;
  score = 0;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  diceEl.classList.add('hidden');

  btnDice.disabled = false;
  btnHold.disabled = false;

  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  if (layP1.classList.contains('player--active')) {
    layP0.classList.add('player--active');
    layP1.classList.remove('player--active');
  }
});

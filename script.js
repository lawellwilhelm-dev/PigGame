'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;


score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
	// 1 - Generating a random dice roll
	const dice = Math.trunc(Math.random() * 6) + 1;
	// 2 - Display the dice
	diceEl.classList.remove('hidden');
	diceEl.src = `dice-${dice}.png`;
	// 3 - Check for a roll one if true switch to the nest player
	if (dice != 1) {
		currentScore += dice;
		document.getElementById(`current--${activePlayer}`).textContent = currentScore;
	} else {
		// SWith to next player
		document.getElementById(`current--${activePlayer}`).textContent = 0;

		currentScore = 0;

		activePlayer = activePlayer == 0 ? 1 : 0;
		
		player0El.classList.toggle('player--active');
		player1El.classList.toggle('player--active');
		
	}
}); 
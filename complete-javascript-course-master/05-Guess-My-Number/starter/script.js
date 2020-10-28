'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 30;
// document.querySelector('.score').textContent = 23;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const body = document.querySelector('body');
const number = document.querySelector('.number');
const highScoreValue = document.querySelector('.highscore');
const scoreValue = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const guessNumber = document.querySelector('.guess');

function displayMessage(msg) {
  document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //when there's no input
  if (!guess) {
    displayMessage('No Number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreValue.textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      score -= 1;
      scoreValue.textContent = score;
    } else {
      displayMessage('You lose!');
      scoreValue.textContent = 0;
    }
  }
});

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem) */

againBtn.addEventListener('click', function () {
  score = 20;
  number.style.width = '15rem';
  scoreValue.textContent = score;
  guessNumber.value = '';
  displayMessage('Start guessing...');
  body.style.background = '#222';
  number.textContent = '?';
});

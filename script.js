'use strict';

let body = document.querySelector('body');
let btnAgin = document.querySelector('.agin');
let number = document.querySelector('.number');
let btnChek = document.querySelector('.chek');
let message = document.querySelector('.message');
let labelScore = document.querySelector('.score');
let labelHighscore = document.querySelector('.highscore');


let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (msg) {
    message.textContent = msg;
};

btnChek.addEventListener('click', function () {

    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔️ No number!');

    } else if (guess === secretNumber) {

        displayMessage('🎉 Correct Number!');
        number.textContent = secretNumber;
        number.style.width = '30rem';
        body.style.backgroundColor = 'green';

        if (score > highscore) {
            highscore = score;
            labelHighscore.textContent = highscore;
        }


    } else if (guess !== secretNumber) {

        guess > secretNumber ? displayMessage('📈 too high') : displayMessage('📉 too low');

        if (score > 1) {
            score--;
            labelScore.textContent = score;

        } else {
            displayMessage('💥 you lost the geam');
            labelScore.textContent = 0;
        }
    }
});




//     else if (guess > secretNumber) {

//         if (score > 1) {
//             displayMessage('📈 too high');
//             score--;
//             labelScore.textContent = score;
//         } else {
//             displayMessage('💥 you lost the geam');
//             labelScore.textContent = 0;
//         }

//     } else if (guess < secretNumber) {

//         if (score > 1) {
//             displayMessage('📉 too low');
//             score--;
//             labelScore.textContent = score;
//         } else {
//             displayMessage('💥 you lost the geam');
//             labelScore.textContent = 0;
//         }
//     }
// });

btnAgin.addEventListener('click', function () {

    secretNumber = Math.floor(Math.random() * 20 + 1);
    score = 20

    displayMessage('start guessing');
    number.textContent = '?';
    number.style.width = '15rem';
    body.style.backgroundColor = 'rgb(56, 3, 56)';
    labelScore.textContent = score;
    document.querySelector('.guess').value = '';

})




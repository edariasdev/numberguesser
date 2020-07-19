/*
Game Logic:
1. Player has to guess a number btween the min and max
2. Only gets x number of guesses (3)
3. Shows # of guesses remaining
4. Notify player of the right answer if lost
5. Allows to play again
 */

// Set Game Values
let min = 1,
    max = 10,
    winningNumber = getrandomNum(min, max),
    guessesLeft = 3;

console.log(`The answer is ${winningNumber}`)

// Set UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// play agina event listner
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') { window.location.reload(); }
})

// Set Page Name
let pageName = document.title.toString();
document.getElementById("apptitle").innerText = pageName;

// Set UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Event Listeners
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');

    }

    // if won
    if (guess === winningNumber) {

        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        message.style.color = 'green'
        setMessage(`${winningNumber} is right!!`, 'green');
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again'

    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {

            guessInput.disabled = true;
            guessInput.style.borderColor = 'red';
            setMessage(`${winningNumber} was the nuber, Game Over`, 'red');
            guessBtn.value = 'Play Again';
            guessBtn.className += 'play-again'
        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)
        }

    }

})

// Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}


function getrandomNum() {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
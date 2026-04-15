let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const Inputvalue = document.querySelector("#guessField")
const GuessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const loworhigh = document.querySelector(".lowOrHi")
const StartOver = document.querySelector(".resultParas")
const Start = document.querySelector(".start")

const p = document.createElement('button')

let previousGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess =  parseInt(Inputvalue.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please enter a valid number')
} else if (guess < 1){
       alert('Please enter a number more than 1')
} else if (guess > 100 ){
        alert('Please enter a number less than 100')
} else {
    previousGuess.push(guess)
    if (numGuess === 10) {
        displayGuess(guess)
        displayMessage(`Game Over <br> Random Number was ${randomNumber}`)
        endGame()
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
}
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right.`)
        endGame()
    } else if(guess < randomNumber){
          displayMessage(`Your Number is TOO low.`)
    } else if(guess > randomNumber){
        displayMessage(`Your Number is Too High.`)
    }
}

function displayGuess(guess) {
    Inputvalue.value = '';
    GuessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    loworhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    Inputvalue.value = '';
    Inputvalue.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">New Game</h2>`
    Start.appendChild(p)
    playGame = false;
    newGame()

}
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuess = []
        GuessSlot.innerHTML = '';
        numGuess = 1;
            remaining.innerHTML = `${11 - numGuess}`;
            Start.removeChild(p)
            Inputvalue.removeAttribute('disabled')
            displayMessage('')
      playGame = true;
    })
}


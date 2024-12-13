# Projects related to DOM

## Projects Links
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# solution code

## Projects 1

```Javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body'); // Selecting the body element

buttons.forEach(function (button) {
  console.log(button); // Fixed typo here (console.loh -> console.log)
  button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    if(event.target=='grey'){
      body.style.backgroundColor = e.target.body;
    }
    if(event.target=='white'){
      body.style.backgroundColor = e.target.body;
    }  
    if(event.target=='blue'){
      body.style.backgroundColor = e.target.body;
    }
    if(event.target=='yello'){
      body.style.backgroundColor = e.target.body;
    }
  });
});

```


## project 2 solution

```const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const wieght = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if(height ===''|| height<0||isNaN(height)){
    result.innerHTML = "please enter the valid value";
  }
  else if(wieght ===''|| wieght<0|| isNaN(wieght)){
    result.innerHTML = "please enter the valid value";
  }else{
    const bmi = (wieght/((height * height)/10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
  }

});

```

## project 3 solution

```
const clock = document.getElementById('clock');
 
setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
 }, 1000);

 ```

## project 4 solution
 ```
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


 ```

## Project 5 Random Color Generator

```

// generate a random colour

const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i=0; i<6; i++){
    color+= hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let intervalId;
const startChangeColor = function(){
  
  intervalId= setInterval(changeBgColor,1000);
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
}
const stopChangeColor = function(){
  clearInterval( intervalId);
  intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangeColor)

document.querySelector('#stop').addEventListener('click',stopChangeColor)

```


## Project 6 KeyCode

```
const inert = document.querySelector('#insert')

window.addEventListener('keydown', (e)=>{
   inert.innerHTML = `
   <div class='color'>
   <table>
   <tr>
     <th>Key</th>
     <th>KeyCode</th>
     <th>Code</th>
   </tr>
   <tr>
     <td>${e.key ===" "? 'Space':e.key}</td>
     <td>${e.keyCode}</td>
     <td>${e.code}</td>
   </tr>
   
 </table>
 
   </div>`
})
```
var timerEl = document.getElementById("timer");
var startButton =document.getElementById("start");
var scoreBoard = document.getElementsByClassName('score')
var scoreEl=document.getElementsByClassName('score-num')
const question = document.querySelector('.quest');
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestion ={};
let acceptAnswer = true;
let score = 0
let availableQuestions = []

let questions = [
  {
   question: 'When was the game Candy Land created?'
   choice1: '1913',
   choice2: '1925',
   choice3: '1942',
   choice4: '1975'
   answer: 3,
  }
]
startButton.addEventListener("click", startQuiz);

var index = 0;

function startQuiz () {
  timer ();
  start.style.display="none";

}
function timer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {

        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = 'Time:' + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = 'Time:' + timeLeft;
            timeLeft--;
          } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage();
          }
        }, 1000);
      }
    
var timerEl = document.getElementById("timer");
var startButton =document.getElementById("start");
var scoreBoard = document.getElementsByClassName('scores')
var scoreEl=document.getElementsByClassName('score-num')
const question = document.querySelector('.quest');
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestion ={};
let acceptAnswer = true;
let score = 0;
let availableQuestions = [];

let questions = [
  {
   question: 'When was the game Candy Land created?',
   choice1: '1913',
   choice2: '1925',
   choice3: '1942',
   choice4: '1975',
   answer: 3,
  },
  {
    question: 'What game helped British Prisoners escape the Nazis?',
    choice1: 'Candy Land',
    choice2: 'Monopoly',
    choice3: 'Clue',
    choice4: 'Jenga',
    answer: 2,
   },
   {
    question: 'Who invented the game of life?',
    choice1: 'Aaron James',
    choice2: 'Samuel Wallace',
    choice3: 'Eugene Davis',
    choice4: 'Milton Bradley',
    answer: 4,
   },
   {
    question: 'What game has skydivers played during a 13,000-foot drop?',
    choice1: 'Scrabble',
    choice2: 'Yahtzee',
    choice3: 'Nintendo Switch',
    choice4: 'Bingo',
    answer: 1,
   },
   {
    question: 'What city was pictionary first created?',
    choice1: 'Seattle',
    choice2: 'Los Angelos',
    choice3: 'Austin',
    choice4: 'Raleigh',
    answer: 1,
   },
   {
    question: 'What is another name for chutes and ladders?',
    choice1: 'Boots and Ladders',
    choice2: 'Snakes and Ladders',
    choice3: 'Shoes and Ladders',
    choice4: 'Yo mama and Ladders',
    answer: 2,
   },
   {
    question: 'Where was Yahtzee first played?',
    choice1: 'Las Vegas',
    choice2: 'A Yacht',
    choice3: 'Underground Bunker',
    choice4: 'Japan',
    answer: 2,
   }
]
const SCORE_POINTS = 100
constant MAX_QUESTIONS = 7

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
    
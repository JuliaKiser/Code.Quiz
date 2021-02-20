var timerEl = document.getElementById("timer");
var startButton =document.getElementById("start");
var scoreBoard = document.getElementsByClassName('scores')
var scoreText = document.getElementById('score-count')
var question = document.querySelector('#question');
var answers = Array.from(document.querySelectorAll('.answer-text'));

var currentQuestion = {};
var acceptAnswer = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

//sets the variable for questions which we cycle through and call on later //
var questions = [
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
const MAX_QUESTIONS = 7

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {

  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
  localStorage.setItem('mostRecentScore', score)

  return document.location.assign('endgame.html')
  }
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  answers.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })
  availableQuestions.splice(questionsIndex, 1)

  acceptAnswer = true 
}

answers.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptAnswer) return

    acceptAnswer = false
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number']

    let classtoApply = selectedAnswer == currentQuestion.answer ? 'correct' :
    'incorrect'

    if(classtoApply === 'correct') {
      incrementScore(SCORE_POINTS)
    }
    selectedChoice.parentElement.classList.add(classtoApply)
    
    setTimeout(() => {
    selectedChoice.parentElement.classList.remove(classtoApply)
    getNewQuestion()
    },1000)
  })
})
//every time a question is answered correctly it will increment the overall score//
incrementScore = num => {
  score += num
  scoreText.innerText = score
}

startButton.addEventListener("click", startQuiz);

//this function starts the quiz once the start quize button is pressed and also calls timer//
function startQuiz () {
  timer ();
  startGame();
  start.style.display="none";
  quizContainer.style.display="block";

}
function timer() {
    var timeLeft = 6;

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
            // You can use the `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Calls the `displayMessage()` function

            displayMessage();
          } 
          
        }, 1000);
      //  Function to display message of time is up and to log score still //
      }
      function displayMessage() {
        alert("You ran out of time!")
        localStorage.setItem('mostRecentScore', score)
        document.location.assign('endgame.html')
          }
      
    

var timerEl = document.getElementById("timer");
var startButton =document.getElementById("start")

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
    
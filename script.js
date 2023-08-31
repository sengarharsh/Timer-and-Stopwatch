const timerInput = document.getElementById("timer-input");
const startTimerButton = document.getElementById("start-timer");
const timerDisplay = document.getElementById("timer-display");

const startStopwatchButton = document.getElementById("start-stopwatch");
const pauseStopwatchButton = document.getElementById("pause-stopwatch");
const resetStopwatchButton = document.getElementById("reset-stopwatch");
const stopwatchDisplay = document.getElementById("stopwatch-display");

let timerInterval;
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchTime = 0;

function startTimer() {
  const duration = parseInt(timerInput.value, 10);
  let remainingTime = duration;

  timerInterval = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Time's up!";
    }
  }, 1000);
}

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      updateStopwatchDisplay();
    }, 1000);
    stopwatchRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const minutes = Math.floor(stopwatchTime / 60);
  const seconds = stopwatchTime % 60;
  stopwatchDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

startTimerButton.addEventListener("click", startTimer);
startStopwatchButton.addEventListener("click", startStopwatch);
pauseStopwatchButton.addEventListener("click", pauseStopwatch);
resetStopwatchButton.addEventListener("click", resetStopwatch);

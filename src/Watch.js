
var timer = document.body.querySelector("#timer");

var resetButton = document.body.querySelector("#reset");

var startButton = document.body.querySelector("#start");

var pauseButton = document.body.querySelector("#pause")

var currentTimeInterval;


resetButton.addEventListener("click", resetTimer);
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);

function countTime(){
  return parseInt(timer.innerText);
}


function startTimer(){
  if (timer.innerText === "Stop Watch"){
    timer.innerText = "0 seconds"
  }

  currentTimeInterval = window.setInterval(function(){
    var elapse = countTime();
    elapse += 1;
    if (parseInt(elapse) == 1){
      timer.innerText = elapse + " second";
    }
    else {
      timer.innerText = elapse + " seconds";
    }
  }, 1000);
}

function pauseTimer(){
  clearInterval(currentTimeInterval);

}


function resetTimer(){
  timer.innerHTML = "Stop Watch";
  clearInterval(currentTimeInterval);
}


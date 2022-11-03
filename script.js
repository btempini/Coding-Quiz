//create variables to reference html elements
var startButton = document.querySelector(".startButton");
var questionsEl = document.querySelector(".questionsEl");
var answersEl = document.querySelector(".answersEl")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")
var timerDisplay = document.querySelector(".timerDisplay")
var playAgain = document.querySelector(".playAgain")
var showScoreEl = document.querySelector(".showScoreEl")
var showScore = document.querySelector(".showScore")
//basis
var index = 0
var score = 0
//create timer function
var timer = 75
timerDisplay.textContent = timer;
function setTime() {
  var timerInterval = setInterval(function() {
    timer --;
    timerDisplay.textContent = timer
    if(timer === 0) {
      clearInterval(timerInterval);
      gameOver()
    }

  }, 1000);
}
setTime();



//use an array of objects
var questions = [
  {
    title: "Of the following, if statements, which one correctly executes three instructions if the condition is true?",
    choices: ["If (x < 0) a = b * 2; y = x; z = a - y;", "{if (x < 0) a = b * 2; y = x; z = a - y; }", "If{ (x < 0) a = b * 2; y = x; z = a - y ; }", "If (x < 0) { a = b * 2; y = x; z = a - y; }"],
    answer: "If (x < 0) { a = b * 2; y = x; z = a - y; }"
  },
  {
    title: "Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?",
    choices: ["If (x > 0) x++; else x--;", "If (x > 0) x++; else if (x < 0) x--;", "If (x == 0) x = 0; else x++; x--;", "X++; x--;"],
    answer: "If (x > 0) x++; else if (x < 0) x--;"
  },
  {
    title: "Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified.",
    choices: ["If/Else", "For", "While", "If"],
    answer: "For"
  },
  {
    title: "A loop that never ends is referred to as a(n)_________.",
    choices: ["While loop", "Infinite loop", "Recursive loop", "For loop"],
    answer: "Infinite loop"
  }
]

//highscores stores an array of objects

//start button
startButton.addEventListener("click", function(event){
  //prevent default
  event.preventDefault();
  //hide/show elements
  startButton.setAttribute("class", "hide")
  answersEl.setAttribute("class", "show")
  showNext();
})

//write a function to display next set of questions
function showNext(){
  //display question
  questionsEl.textContent = questions[index].title;
  answer1.textContent = questions[index].choices[0];
  answer2.textContent = questions[index].choices[1];
  answer3.textContent = questions[index].choices[2];
  answer4.textContent = questions[index].choices[3];   
  }

//listens for click to new question and THEN fires check answer function
answersEl.addEventListener("click", checkAnswer)
//write a function to check answers
function checkAnswer(event) {
  event.preventDefault();
  var answer = event.target.textContent;
  if(answer === questions[index].answer) {
    score = score + 10;
  } else {
    score = score - 10;
    timer = timer - 15;
  }
  //update storage for score
  localStorage.setItem("score", score)
  //check to see if game is over
  if ((index + 1) < questions.length) {
    index++;
    showNext();
  } else {
    gameOver()
  }
}

//game over function
function gameOver() {
  startButton.setAttribute("class", "hide")
  questionsEl.textContent = "Game Over!"
  answersEl.setAttribute("class", "hide")
  showScore.textContent = score
  showScoreEl.setAttribute("class", "show")
  playAgain.setAttribute("class", "show")
}

//event listener for play again
playAgain.addEventListener("click", playAgainBtn)

//play Again function
function playAgainBtn () {
  index = 0;
  score = 0;
  timer = 75;
  localStorage.clear();
  showScoreEl.setAttribute("class", "hide");
  playAgain.setAttribute("class", "hide");
  answersEl.setAttribute("class", "show");
  
  showNext();
}
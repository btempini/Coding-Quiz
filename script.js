//create variables to reference html elements
var startButton = document.querySelector(".startButton");
var questionsEl = document.querySelector(".questionsEl");
var answersEl = document.querySelector(".answersEl")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")
var timerDisplay = document.querySelector(".timerDisplay")
var submitForm = document.querySelector(".submitForm")
var submitBtn = document.querySelector(".submitBtn")
var showScoreEl = document.querySelector(".showScoreEl")
var showScore = document.querySelector(".showScore")
var scoreBoard = document.querySelector(".scoreBoard")
var userName = document.querySelector(".userName")
var playAgainBtn = document.querySelector(".playAgain")
var viewHighscores = document.querySelector(".viewHighScore")
var info = document.querySelector(".info")
var clock;

//basis
var index = 0
var score = 0
//create timer function
var timer = 75
timerDisplay.textContent = timer;
//timer function
function setTime() {
  clock = setInterval(function() {
    timer --;
    timerDisplay.textContent = timer
    if(timer <= 0) {
      clearInterval(clock);
      gameOver()
    }
  }, 1000);
}

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
  },
  {
    title: "Which command will stop an infinite loop?",
    choices: ["Alt - C", "Shift - C", "Esc", "Ctrl - C"],
    answer: "Ctrl - C",
  },
  {
    title: "Kim has just constructed her first for loop within the Javascript language.  Which of the following is not a required part of a for loop?",
    choices: ["Initialization", "Condition", "Variable", "Increment"],
    answer: "Variable"
  },
  {
    title: "Jay is considering adding a repetition statement within his Javascript programming final project. Jay is unsure of the number of times each loop needs to execute.  Analyze the conditional statements below and select which statement best fits the need identified by Jay within his programming.",
    choices: ["While loop", "If-Else", "For loop", "Switch Statement"],
    answer: "While loop"
  },
  {
    title: "_______ is the process of finding errors and fixing them within a program.",
    choices: ["Compiling", "Executing", "Debugging", "Scanning"],
    answer: "Debugging"
  }
]

//start button
startButton.addEventListener("click", function(event){
  //prevent default
  info.setAttribute("class", "hide")
  setTime();
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

//write a function to check answers
function checkAnswer(event) {
  event.preventDefault();
  var answer = event.target.textContent;
  if(answer === questions[index].answer) {
    score++;
  } else {
    timer = timer - 15;
  }
  //update storage for score
  localStorage.setItem("score", score)
  //check to see if game is over
  if ((index + 1) < questions.length) {
    index++;
    showNext();
  } else {
    clearInterval(clock);
    gameOver()
  }
}

//game over function
function gameOver() {
  startButton.setAttribute("class", "hide")
  questionsEl.textContent = "All done!";
  answersEl.setAttribute("class", "hide");
  showScore.textContent = score;
  showScoreEl.setAttribute("class", "show");
  submitForm.setAttribute("class", "show");
}

//highscores stores an array of objects

//submit function
function submitScore (event) {
  event.preventDefault()
  var endScore = {
    userName: userName.value,
    score: score,
  };
  var highscores = JSON.parse(localStorage.getItem("highscore")) || [];
  highscores.push(endScore);
  localStorage.setItem("highscore", JSON.stringify(highscores));
  userName.value = ""
  displayScore();
}

function displayScore() {
  clearInterval(clock);
  startButton.setAttribute("class", "hide")
  showScoreEl.setAttribute("class", "hide");
  submitForm.setAttribute("class", "hide");
  answersEl.setAttribute("class", "hide");
  questionsEl.textContent = "Highscores"
  questionsEl.classList.add("hide");
  playAgainBtn.setAttribute("class", "show");
  scoreBoard.setAttribute("class", "show")
  var highscores = JSON.parse(localStorage.getItem("highscore"));
  for (var i = 0; i < highscores.length; i++) {
    var userScoreEl = document.createElement("li");
    userScoreEl.setAttribute("class", "show");
    userScoreEl.textContent = "Initials: " + highscores[i].userName + "  Score: " + highscores[i].score;
    scoreBoard.appendChild(userScoreEl);
  }
  console.log(userScoreEl)
}

//listens for click to new question and THEN fires check answer function
answersEl.addEventListener("click", checkAnswer)
//event listener for submit
submitBtn.addEventListener("click", submitScore)
//event listener for play again
playAgainBtn.addEventListener("click", function() {
  localStorage.clear()
  questionsEl.textContent = "Coding Quiz Challenge!"
  questionsEl.classList.add("show")
  info.setAttribute("class", "show")
  startButton.setAttribute("class", "show")
  playAgainBtn.setAttribute("class", "hide")
  scoreBoard.setAttribute("class", "hide")
  index = 0;
  score = 0;
  timer = 75;
})
//event listener for view high score button
viewHighscores.addEventListener("click", displayScore)
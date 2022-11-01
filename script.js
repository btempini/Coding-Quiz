//create variables to reference html elements
var startButton = document.querySelector(".startButton");
var questionsEl = document.querySelector(".questionsEl");
var answersEl = document.querySelector(".answersEl")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")
var timerDisplay = document.querySelector(".timerDisplay")


var score = 0
var timer = 75

timerDisplay.textContent = timer

//use an array of objects
var questions = [
  {
    title: "Of the following, if statements, which one correctly executes three instructions if the condition is true?",
    choices: ["If (x < 0) a = b * 2; y = x; z = a - y;", "{if (x < 0) a = b * 2; y = x; z = a - y; }", "If{ (x < 0) a = b * 2; y = x; z = a - y ; }", "If (x < 0) { a = b * 2; y = x; z = a - y; }"],
  },
  {
    title: "test",
    choices: ["aaa", "bbb", "ccc", "ddd"]
  }
  //highscores stores an array of objects
]

startButton.addEventListener("click", function(event){
  //prevent default
  event.preventDefault();
  //hide/show elements
  startButton.setAttribute("class", "hide")
  answersEl.setAttribute("class", "show")
  //display question
  questionsEl.textContent = questions[0].title
  //display answers
  answer1.textContent = questions[0].choices[0]
  answer2.textContent = questions[0].choices[1]
  answer3.textContent = questions[0].choices[2]
  answer4.textContent = questions[0].choices[3]
})

//write a function to check if answer is correct


answersEl.addEventListener("click", function(event){
  console.log(event.target.getAttribute("class"))
  //if selected correct element, increment score
  if (event.target.getAttribute("class") === "answer4") {
    score++;
    alert("Correct!")
    questionsEl.textContent = questions[1].title
    answer1.textContent = questions[1].choices[0]
    answer2.textContent = questions[1].choices[1]
    answer3.textContent = questions[1].choices[2]
    answer4.textContent = questions[1].choices[3]
  } else {
    score--;
  }
  console.log(score)
  //otherwise decrement timer and move to next question
})


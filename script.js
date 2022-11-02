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
//create timer function
var timer = 75
var index = 0


timerDisplay.textContent = timer

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
    answer: "answer2"
  },
  {
    title: "aaa",
    choices: ["1", "2", "3", "4"],
    answer: "answer3"
  },
  {
    title: "bbb",
    choices: ["one", "two", "three", "four"],
    answer: "answer2"
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
  console.log("current:" , index)
  questionsEl.textContent = questions[index].title;
  answer1.textContent = questions[index].choices[0];
  answer2.textContent = questions[index].choices[1];
  answer3.textContent = questions[index].choices[2];
  answer4.textContent = questions[index].choices[3];   
  }

//listens for click to new question and THEN fires check answer function
answersEl.addEventListener("click", checkAnswer)
//write a function to check answers
function checkAnswer() {
  console.log("index:" , index)
    var answer = this.value;
    console.log(this)
    if(answer === questions[index].answer) {
      score++;
    } else {
      score--;
    }
    //increase index for showNext function
    index++;
    showNext();
}
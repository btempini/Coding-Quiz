questionsObjArray = [
  {
    question: "This is question 1",
    answers: {
      a: "answer1",
      b: "answer2",
      c: "answer3",
      d: "answer4",
    },
    correctAnswer: "answer1",
  },
  {
    question: "This is question 2",
    answers: {
      a: "answer1",
      b: "answer2",
      c: "answer3",
      d: "answer4",
    },
    correctAnswer: "answer1",
  },
  {
    question: "This is question 3",
    answers: {
      a: "answer1",
      b: "answer2",
      c: "answer3",
      d: "answer4",
    },
    correctAnswer: "answer1",
  },
  {
    question: "This is question 4",
    answers: {
      a: "answer1",
      b: "answer2",
      c: "answer3",
      d: "answer4",
    },
    correctAnswer: "answer1",
  },
];

var getMainQuestionEl = document.getElementById("mainQuestion");
var getRemoveEl = document.getElementById("remove");
var getQuestion1El = document.getElementById("question1");
var timerEl = document.getElementById("timer");
var startButtonEl = document.getElementById("startButton");
var mainSectionEl = document.getElementById("mainSection");

var timeLeft = 60;
timerEl.textContent = timeLeft;
var questionIndex = 0;

function startQuiz() {
  startTimer();
  startButtonEl.style.display = "none";
  hideMainEl();
  injectQuestions();
}

function startTimer() {
  var timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
      return;
    }
    timeLeft = timeLeft - 1;
    timerEl.textContent = timeLeft;
  }, 1000);
}

function hideMainEl() {
  getMainQuestionEl.style.display = "none";
  getRemoveEl.style.display = "none";
}

function injectQuestions() {
  var questionContainer = document.createElement("div");
  var questionEl = document.createElement("h1");
  var answerEl = document.createElement("h2");

  questionEl.textContent = questionsObjArray[questionIndex].question;
  for (i = 0; i < 3; i++) {
    //append answers in this loop
  }

  mainSectionEl.appendChild(questionContainer);
  questionContainer.appendChild(questionEl);
  questionContainer.appendChild(answerEl);
}

startButtonEl.addEventListener("click", startQuiz);

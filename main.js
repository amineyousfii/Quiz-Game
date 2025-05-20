// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Tool Multi Language", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: [
      { text: "<script>", correct: false },
      { text: "<style>", correct: true },
      { text: "<css>", correct: false },
      { text: "<head>", correct: false },
    ],
  },
  {
    question: "Which CSS property controls the text size?",
    answers: [
      { text: "font-style", correct: false },
      { text: "text-size", correct: false },
      { text: "text-style", correct: false },
      { text: "font-size", correct: true },
    ],
  },
  {
    question: "What does the box-sizing: border-box; property do?",
    answers: [
      { text: "Adds a border around content", correct: false },
      { text: "Excludes padding from the total width", correct: false },
      { text: "Includes padding and border in total width", correct: true },
      { text: "Adds margin to the box", correct: false },
    ],
  },
  {
    question: "Which JavaScript method is used to select an HTML element by ID?",
    answers: [
      { text: "getElementByClassName()", correct: false },
      { text: "getElementById()", correct: true },
      { text: "querySelectorAll()", correct: false },
      { text: "getElement()", correct: false },
    ],
  },
  {
    question: "What is the default position value of an HTML element?",
    answers: [
      { text: "fixed", correct: false },
      { text: "relative", correct: false },
      { text: "static", correct: true },
      { text: "absolute", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false },
    ],
  },
  {
    question: " How do you write a comment in CSS?",
    answers: [
      { text: "// comment", correct: false },
      { text: "/* comment */", correct: true },
      { text: "<!-- comment -->", correct: false },
      { text: "# comment", correct: false },
    ],
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onmouseclick", correct: false },
      { text: "onchange", correct: false },
      { text: "onmouseover", correct: false },
      { text: "onclick", correct: true },
    ],
  },
  {
    question: "Which CSS property is used to change the background color?",
    answers: [
      { text: "bg-color", correct: false },
      { text: "background-color" , correct: true },
      { text: "color", correct: false },
      { text: "background", correct: false },
    ],
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    answers: [
      { text: "Define styles", correct: false },
      { text: "Load images", correct: false },
      { text: "Insert scripts", correct: false },
      { text: "Provide metadata about the document", correct: true },
    ],
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "define", correct: false },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: [
      { text: "Django", correct: false },
      { text: "React", correct: true },
      { text: "Bootstrap", correct: false },
      { text: "MySQL", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Creative Style Sheets", correct: false },
    ],
  },
  {
    question: "In JavaScript, what will typeof NaN return?",
    answers: [
      { text: "number", correct: true },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: false },
    ],
  },
  {
    question: "Which HTTP method is idempotent?",
    answers: [
      { text: "POST", correct: false },
      { text: "GET", correct: false },
      { text: "PUT", correct: true },
      { text: "PATCH", correct: false },
    ],
  },
  {
    question: "In CSS, which unit is relative to the font-size of the root element?",
    answers: [
      { text: "em", correct: false },
      { text: "rem", correct: true },
      { text: "%", correct: false },
      { text: "vw", correct: false },
    ],
  },
  {
    question: "What does the defer attribute do in a <script> tag?",
    answers: [
      { text: "Prevents the script from executing", correct: false },
      { text: "Executes the script immediately", correct: false },
      { text: "Executes script before the HTML loads", correct: false },
      { text: "Delays script execution until after HTML is parsed ", correct: true },
    ],
  },
  {
    question: "What is the output of this JavaScript expression: [] + {}",
    answers: [
      { text: "NaN", correct: false },
      { text: "[Object Object]", correct: true },
      { text: "undefined", correct: false },
      { text: "TypeError", correct: false },
    ],
  },
  {
    question: "What is the main purpose of the Content Delivery Network (CDN) in web development?",
    answers: [
      { text: "To manage API endpoints efficiently", correct: false },
      { text: "To serve static assets from geographically distributed servers", correct: true },
      { text: "To store sensitive user data securely", correct: false },
      { text: "To improve the backend database performance", correct: false },
    ],
  },
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}
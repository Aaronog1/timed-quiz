const startButton = document.getElementById('start');
const questionTitle = document.getElementById('question-title');
const choicesContainer = document.getElementById('choices');
const timeDisplay = document.getElementById('time');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit');

let questions = [
  {
    question: "Sample Question 1?",
    choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
    answer: 1 // index of the correct answer in choices array
  },
  // Add more questions here
];

let currentQuestionIndex = 0;
let timeLeft = 60; // starting time

function startQuiz() {
  // Logic to start the quiz
}

function displayQuestion() {
  // Logic to display questions
}

function checkAnswer() {
  // Logic to check the selected answer
}

function endQuiz() {
  // Logic to end the quiz
}

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', endQuiz);
choicesContainer.addEventListener('click', checkAnswer);
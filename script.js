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
    question: "What's the best Harry potter movie?",
    choices: ["Prizoner of Azkaban", "Deathly Hallows Part 1", "Half Blood Prince", "Goblet of fire"],
    answer: "Goblet of fire"
  },
  {
    question: "Who is the best Character",
    choices: ["Dobby!!!", "Harry Potter", "Snape", "Heromonie"],
    answer: "Dobby!!!"
  },
]

let currentQuestionIndex = 0;
let timeLeft = 60; // starting time

function startQuiz() {
} // to start the quiz

function displayQuestion() {
}// to display questions


function checkAnswer() {
  // Logic to check the selected answer
}

function endQuiz() {
} // to end the quiz

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', endQuiz);
choicesContainer.addEventListener('click', checkAnswer);
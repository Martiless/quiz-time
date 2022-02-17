// Constants
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const questionPanelElement = document.getElementById('question-panel');
const questionsElement = document.getElementById('questions');
const nextButtonElement = document.getElementById('next-btn');
const usernameElement = document.getElementById('username-area');
const enterNameElement = document.getElementById('enter-name');
const submitButtonElement = document.getElementById('submit-btn');
const answerButtonsElement = document.getElementById('answer-buttons');
const scorePanelElement = document.getElementById('score-panel');
const userScoreElement = document.getElementById('user-score');
const scoreCounterElemet = document.getElementById('score-counter');
const questionCounterElement = document.getElementById('question-counter');

// Wait for the DOM to finish loading before game runs. 
document.addEventListener("DOMContentLoaded", startButton);

// Variables
let shuffledQuestions, currentQuestionIndex;
let questionCounter = 1;
let scoreCounter = 0;
let score = 0;
let maxQuestions = 10;

// Event Listeners
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", () => {
    resetScreen();
    restartGame();
});
nextButtonElement.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion();
})
submitButtonElement.addEventListener("click", () => {
    alert("Thank you for submitting your username. We hope you enjoyed our game. Please press 'Restart Game' to play again 😎")
})

/* This function will run once the user clicks on the start button*/
function startGame() {
    console.log('StartGame');
    startButton.classList.add('hidden');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionPanelElement.classList.remove('hidden');
    questionCounter = 0;
    scoreCounter = 0;
    callQuestions();
}

/* Once the user has started the game this function will initiate the questions */
function callQuestions() {
    resetScreen;
    loadQuestions(shuffledQuestions[currentQuestionIndex]);
}

/*Calls the next question once the next button is pressed*/
function nextQuestion() {
    resetScreen;
    loadQuestions(shuffledQuestions[currentQuestionIndex]);
}

/* Creates answer buttons in the HTML to house the answer variables in the questions object below*/
function loadQuestions(questions) {
    scorePanelElement.classList.remove('hidden');
    nextButtonElement.classList.remove('hidden');
    questionCounter++;
    questionCounterElement.innerText = questionCounter + '/' + maxQuestions;
    questionsElement.innerText = questions.question;
    questions.answers.forEach(answer => {
        const answerButton = document.createElement('button')
        answerButton.innerText = answer.text;
        answerButton.classList.add('answer-btn');
        answerButton.dataset.correct = answer.correct;
        answerButton.addEventListener('click', checkAnswers);
        answerButtonsElement.appendChild(answerButton);        
    })
}

/* Clears the screen of the previous answer button text */
function resetScreen() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}


/* Checks the answer that has been selected, calls the userScore function & the answerChoice function */

function checkAnswers(e) {
    selectedAnswer = e.target;
    const correct = selectedAnswer.dataset.correct;
    if (correct === "true") {
        userScore();
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        answerChoice(button, button.dataset.correct);
    })
    if (shuffledQuestions.lenght > currentQuestionIndex + 1) {
        callQuestions;
    } else {
        nextButtonElement.classList.add('hidden');
        questionPanelElement.classList.add('hidden');
        enterNameElement.classList.remove('hidden');
        usernameElement.classList.remove('hidden');
        restartButton.classList.remove('hidden');
    }
    answerChoice;
}

/* Increase the users score if the answer us correct */
function userScore() {
    scoreCounter++;
    scoreCounterElemet.innerText = ++score;
}

/* May not be needed if I can put it into the selectAnswers function*/
function checkAnswers(element, correct) {
    resetPage
    if (correct) {
        element.classList.add('correct-btn');
    } else {
        element.classList.add('incorrect-btn');
    }
}


function resetPage(element) {
    element.classList.remove('correct-btn')
    element.classList.remove('incorrect-btn')

}


/**
 * Gets current correct score from the DOM nad increases it by 1
 * This code was taken from Code Institutes Love Maths Project
 * *WILL EDIT TO FIT GAME LATER
 */
function correctAnswerScore() {
    let score = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++score;
}

/**
 * Gets current incorrect score from the DOM nad increases it by 1
 * This code was taken from Code Institutes Love Maths Project
 * *WILL EDIT TO FIT GAME LATER
 */
function incorrectAnswerScore() {
    let score = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++score;
}

/* This function will be called at the end of the game. It will show the users score and also ask them to enter a username*/
function finshGame() {
    questionPanelElement.classList.add('hidden');
    scorePanelElement.classList.add('hidden');
    usernameElement.classList.remove('hidden');

}
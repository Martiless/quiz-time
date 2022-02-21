/* jshint esversion: 6 */

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
    currentQuestionIndex++;
    nextQuestion();
});
submitButtonElement.addEventListener("click", () => {
    alert("Thank you for submitting your username. We hope you enjoyed our game. Please press 'Restart Game' to play again 😎");
});

/** 
 * This function will run once the user clicks on the start button
 */
function startGame() {
    console.log('StartGame');
    startButton.classList.add('hidden');
    /** 
     * Randomise the questions from the list of questions in questions.js 
     */
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionPanelElement.classList.remove('hidden');
    questionCounter = 0;
    scoreCounter = 0;
    callQuestions();
}

/** 
 * Once the user has started the game this function will initiate the questions 
 */
function callQuestions() {
    resetScreen();
    loadQuestions(shuffledQuestions[currentQuestionIndex]);
}

/**
 * Calls the next question once the next button is pressed
 */
function nextQuestion() {
    resetScreen();
    loadQuestions(shuffledQuestions[currentQuestionIndex]);
}

/** 
 * Creates answer buttons in the HTML to house the answer variables in the questions object below
 * @param questions is the list of questions from questions.js file
 */
function loadQuestions(questions) {
    scorePanelElement.classList.remove('hidden');
    nextButtonElement.classList.remove('hidden');
    questionCounter++;
    questionCounterElement.innerText = questionCounter + '/' + maxQuestions;
    questionsElement.innerText = questions.question;
    /** 
     * Creates and populates the answer buttons 
     */
    questions.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.innerText = answer.text;
        answerButton.classList.add('answer-btn');
        answerButton.dataset.correct = answer.correct;
        answerButton.addEventListener('click', checkAnswers);
        answerButtonsElement.appendChild(answerButton);
    });
}

/** 
 * Clears the screen of the previous answer button text 
 */
function resetScreen() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}


/** 
 * Checks the answer that has been selected, calls the userScore function & the answerChoice function
 * @param e is taking in the event listener from the loadQuestion function
 */

function checkAnswers(e) {
    selectedAnswer = e.target;
    const correct = selectedAnswer.dataset.correct;
    if (correct) {
        userScore();
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        answerChoice(button, button.dataset.correct);
    });
    /** 
     * Should a new question be loaded or finish game  
     */
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
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

/** 
 * Increase the users score if the answer us correct
 */
function userScore() {
    scoreCounter++;
    scoreCounterElemet.innerText = ++score;
}

/** 
 * Resets the user score to 0 when the restart game button is pressed
 */
function resetUserScore() {
    score = 0;
    scoreCounterElemet.innerText = 0;
}


/** 
 * Changes the colour of the answer buttons to relfex the users correct or incorrect answer
 * @param element takes an element in this case it is the answerButtonElement
 * @param correct is checking if the element is correct 
 */
function answerChoice(element, correct) {
    clearColours(element);
    if (correct) {
        element.classList.add('correct-btn');
    } else {
        element.classList.add('incorrect-btn');
    }
}

/** 
 * Resets the colours of the buttons to the default colours when a new questions is loaded
 * @param element takes an element in this case it is the answerButtonElement
 */
function clearColours(element) {
    element.classList.remove('correct-btn');
    element.classList.remove('incorrect-btn');
}


/**
 * Restarts the game if a user wishes to plat the game again 
 */
function restartGame() {
    resetScreen;
    usernameElement.classList.add('hidden');
    enterNameElement.classList.add('hidden');
    restartButton.classList.add('hidden');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionPanelElement.classList.remove('hidden');
    questionCounter = 0;
    resetUserScore();
    callQuestions();
}
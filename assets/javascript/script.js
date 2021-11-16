const startButton = document.getElementById('start-btn');
const questionPanelElement = document.getElementById('question-panel');
const questionsElement = document.getElementById('questions');
const submitButtonElement = document.getElementById('submit-btn');
const usernameElement = document.getElementById('username-area');
const answerButtonsElement = document.getElementById('answer-buttons');
const scorePanelElement = document.getElementById('score-panel');

let shuffledQuestions, currentQuestionIndex;

console.log(questions)

// Wait for the DOM to finish loading before game runs. 
// Code used in this project is influneced by code used in Code Institutes Love Maths project.
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "start-button") {
                startGame();
            } else {
                alert("Press Start Game button");
            }
        });
    }

});
/*startButton.addEventListener('click', startGame);
submitButtonElement.addEventListener('load', pushQuestions, resetPage);*/

/* This is the start of the game. Once the user clicks on the start game button the questions will appear on the screen */

function startGame() {
    console.log('StartGame');
    startButton.classList.add('hidden');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionPanelElement.classList.remove('hidden');
    pushQuestions();
}

/* Once the user has started the game this function will initiate the questions */
function pushQuestions() {
    startQuestions(shuffledQuestions[currentQuestionIndex]);
}

/* Creates answer buttons in the HTML to house the answer variables in the questions object below*/
function startQuestions(questions) {
    scorePanelElement.classList.remove('hidden');
    questionsElement.innerText = questions.question;
    questions.answers.forEach(answer => {
        let newButton = document.createElement('button')
        newButton.innerText = answer.text
        newButton.classList.add('answer-btn');
        if (answer.correct); {
            newButton.dataset.correct = answer.correct
        }
        newButton.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(newButton);
    })
}

/* Event listener for the answer selected by the user */

function selectAnswer(e) {
    console.log("I'm here!")

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;


    // submitButtonElement.classList.remove('hidden');
    // questions.answers.forEach(answer => {
    //          if (answer.correct === true) {
    //              console.log('Correct');
    //          } else {
    //              console.log('Wrong!');
    //          }
    //      })

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







/* Once the answer has been submitted this will load the next question */
function nextQuestion() {


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
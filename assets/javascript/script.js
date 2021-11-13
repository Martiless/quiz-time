let moviesQuestions = JSON.parse(localStorage.getItem('moviequestions')) || [];
let tvShowQuestions = JSON.parse(localStorage.getItem('tvquestions')) || [];
let leaderBoard = JSON.parse(localStorage.getItem('leaderboard')) || [];

const questionPanelElement = document.getElementById('questions-panel')
const questionElement = document.getElementsByClassName('questions-area')
const answerButtonsElement = document.getElementById('answer-buttons')

// Wait for the DOM to finish loading before game runs. 
// Code used in this project is influneced by code used in Code Institutes Love Maths project.

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                startGame(gameType);
            }
        });
    };
    startGame("movie");
});


function startGame(gameType) {
    if (gameType === "movies") {
        displayMovieQuestions;
} else if (gameType === "tvshows"){
        displayTVQuestions; 
 } else {
    alert(`Unknown game type ${gameType}`);
    throw `Unknown game type ${gameType}, aborting!`;
}


function checkAnswers() {

}

function displayMovieQuestions(moviesQuestions) {
    let moviesQuestions = Math.floor(Math.random() * moviesQuestions.length);
	let current_question = moviesQuestions[movieQuestions_index];
	gameQuestions.splice(movieQuestions_index, 1);
	return current_question;


}

function displayTVQuestions(tvShowQuestions) {
    let tvShowQuestions = Math.floor(Math.random() * tvShowQuestions.length);
	let current_question = tvShowQuestions[tvShowQuestions_index];
	gameQuestions.splice(list_index, 1);
	return current_question;
}

/**
 * Gets current correct score from the DOM nad increases it by 1
 * This code was taken from Code Institutes Love Maths Project
 */
function correctAnswerScore() {
    let score = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++score;
}

/**
 * Gets current incorrect score from the DOM nad increases it by 1
 * This code was taken from Code Institutes Love Maths Project
 */
function incorrectAnswerScore() {
    let score = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++score;
}

function finshGame() {

}

function updateLeaderBoard() {}
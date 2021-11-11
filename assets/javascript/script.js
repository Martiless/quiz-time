// Wait for the DOM to finish loading before game runs. 
// Code used in this project is influneced by code used in Code Institutes Love Maths project.
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("dif-btn");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type")) {
                let gameDif = this.getAttribute("data-type");
                runGame(gameDif);
            }
        });
    }
});

function startGame() {

}

function checkAnswers() {

}

function chooseQuestion() {

}

function displayMovieQuestions() {

}

function displayTVQuestions() {

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

function updateLeaderBoard() {

        }
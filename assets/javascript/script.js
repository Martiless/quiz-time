let moviesQuestions = JSON.parse(localStorage.getItem('moviequestions')) || [];
let tvShowQuestions = JSON.parse(localStorage.getItem('tvquestions')) || [];
let leaderBoardNames = JSON.parse(localStorage.getItem('leaderboard')) || [];

const startButton = document.getElementById('start-btn')
const questionPanelElement = document.getElementById('question-panel')
const questionsElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('submit-btn')
const usernameElement = document.getElementById('username-area')

let shuffledQuestions, currentQuestionIndex

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




/* This is the start of the game. Once the user clicks on the start game button the questions will appear on the screen */

function startGame() {
    console.log('StartGame')
    startButton.classList.add('hidden')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionPanelElement.classList.remove('hidden')
    firstQuestion()
}

/* Once the user has started the game this function will initiate the questions */
function firstQuestion() {
    startQuestions(shuffledQuestions[currentQuestionIndex])
}

/*NEED TO COME BACK AND TAKE A LOOK AT THIS!!!*/
function startQuestions(questions){
    questionsElement.innerText = questions.question
    questions.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('answer-btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
      })
    }

function nextQuestion () {
    answerButtonsElement

}

function checkAnswers() {

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

/*NEED TO COME BACK AND TAKE A LOOK AT THIS!!!*/
function updateLeaderBoard() {
    let leaderboard = document.getElementById("leader-board");
    leaderboard.innerHTML = "leaderBoard.name";
}

const questions = [{
        question: "Who has selective mutism in The Big Bang Theory?",
        answers: {
            a: "Howard",
            b: "Amy", 
            c: "Raj", 
            d: "Stuart",
        },
        correctAnswer: "c"
    },

 /*   {
        question: "What is Dexter Morgan's profession in the show 'Dexter'",
        answers: ["Homicide Detective", "Blood Spatter Analyst", "Morgue Technician", "Barista"],
        correctAnswer: "Blood Spatter Analyst"

    },

    {
        question: "What actor plays Marty Byrde in 'Ozark'?",
        answers: ["Jason Bateman", "Jerry O'Connell", "Nathan Fillion", "Liev Schreiber"],
        correctAnswer: "Jason Bateman"

    },

    {
        question: "In 'Master of None' where does Dev move to after being dropped from a big sci-fi movie?",
        answers: ["France", "Spain", "Greece", "Italy"],
        correctAnswer: "Italy"

    },

    {
        question: "What actor plays 11 in the hit TV show 'Stranger Things'",
        answers: ["Amelia Crouch", "Elle Fanning", "Chloë Grace Moretz", "Millie Bobby Brown"],
        correctAnswer: "Millie Bobby Brown"

    },

    {
        question: "Phil Coulson is a character portrayed by which actor in TV's 'Agents of S.H.I.E.L.D.'?",
        answers: ["Marc Evan Jackson", "Clark Gregg", "Alistair Petrie", "Colin Firth"],
        correctAnswer: "Clark Gregg"

    },

    {
        question: "In what U.S. state is Breaking Bad set?",
        answers: ["New Mexico", "Virginia", "Arizona", "Oregon"],
        correctAnswer: "New Mexico"

    },

    {
        question: "Which one of this people do NOT appear in Netflix 'The Tiger King'?",
        answers: ["Jeff Lowe", "Carole Baskin", "Joe Exotic", "Selina Kyle"],
        correctAnswer: "Selina Kyle"

    },

    {
        question: "Scrubs actor Zach Braff directed an episode of which award winning TV show about soccor?",
        answers: ["Ted Lasso", "The Kicks", "All or Nothing", "Club of Crows"],
        correctAnswer: "Ted Lasso"

    },

    {
        question: "Brooklyn Nine Nine star Andy Samberg is also a member of which comedy band?",
        answers: ["Tenacious D", "The Lonley Island", "Flight of the Conchords", "Spinal Tap"],
        correctAnswer: "The Lonley Island"

    },

    {
        question: "What’s the name of the skyscraper in Die Hard?",
        answers: ["Nakatomi Plaza", "Nakatomi Tower", "Nakatomi Building", "Nakatomi Place"],
        correctAnswer: "Nakatomi Plaza"
    },

    {
        question: "In which of his movies does Robert De Niro famously say “You talkin’ to me?”",
        answers: ["Scar Face", "Taxi Driver", "Raging Bull", "Goodfellas"],
        correctAnswer: "Taxi Driver"

    },

    {
        Question: "Which award winning director plays Korg in Thor: Ragnarok",
        answers: ["Tim Burton", "J. J. Abrams", "Taika Waititi", "Anthony Rosso"],
        correctAnswer: "Taika Waititi"

    },

    {
        question: "Who is the only actor to receive an Oscar nomination for acting in a Lord of the Rings movie?",
        answers: ["Elijah Wood", "Ian McKellen", "Andy Serkis", "Hugo Weaving"],
        correctAnswer: "Ian McKellen"

    },

    {
        question: "What song plays over the opening credits of Guardians of the Galaxy?",
        answers: ["Come and Get Your Love", "Fox on the Run", "Oooh Child", "Hooked on a Feeling"],
        correctAnswer: "Come and Get Your Love"

    },

    {
        question: "Which Harry Potter star will be playing the dark knight in Matt Reeves upcoming movie 'The Batman'?",
        answers: ["Tom Felton", "Daniel Radcliffe", "Matthew Lewis", "Robert Pattinson"],
        correctAnswer: "Robert Pattinson"

    },

    {
        question: "What is the highest-grossing movie of all time (not adjusted for inflation)?",
        answers: ["Titanic", "Avatar", "Avengers Endgame", "Star Wars V"],
        correctAnswer: "Avengers Endgame"

    },

    {
        question: "For which one of these movies did Margot Robbie receive an oscar nomination?",
        answers: ["Wolf of Wall Street", "I, Tonya", "Suicide Squad", "Once Upon A Time In Hollywood"],
        correctAnswer: "I, Tonya"

    },

    {
        question: "What was Quentin Tarantino‘s first feature as writer/director?",
        answers: ["Jackie Brown", "Reservoir Dogs", "Pulp Fiction", "From Dusk Till Dawn"],
        correctAnswer: "Reservoir Dogs"

    },

    {
        question: "Which one of these Tim Burton films did composer Danny Elfman voice a character?",
        answers: ["Bettle Juice", "Nightmare Before Christmas", "Planet of the Apes", "Frankenweenie"],
        correctAnswer: "Nightmare Before Christmas"

    }*/
]

const leaderBoard= [ {
    
    name: "Martiless"
},
{
    name: "Stevomar"
},
{
    name: "Lilybells"
},
{
    name: "Sparkimus"
},
{
    name: "Golagol"
},
{
    name: "Jon Snow"
},
{
    name: "Tensoon"
},
{
    name: "fast_and_the_curious"
},
{
    name: "Mr Pink"
},
{
    name: "Star Lord"
}

]
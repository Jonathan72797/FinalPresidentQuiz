// Quiz data
const questions = [
   
    
    {
        question: "Which president signed the act creating the United States Marine Band?",
        answers: ["Joe Biden", "John Adams", "Thomas Jefferson", "James Madison"],
        correct: "John Adams"
    },
    {
        question: "Which president was often mocked in the press for his unkempt appearance?",
        answers: ["Abraham Lincoln", "Bill Clinton", "Andrew Johnson", "James Buchanan"],
        correct: "Abraham Lincoln"
    },
    {
        question: "Which president was a classically trained pianist and played 4 other instruments?",
        answers: ["Richard Nixon", "John Adams", "George Washington", "James Madison"],
        correct: "Ulysses S. Grant"
    },
    {
        question: "Which president made Christmas a national holiday?",
        answers: ["Ulysses S. Grant", "Donald Trump", "Thomas Jefferson", "James Madison"],
        correct: "Ulysses S. Grant"
    },
    {
        question: "Who was the first American-born president?",
        answers: ["Ulysses S. Grant", "Martin Van Buren", "Thomas Jefferson", "James Madison"],
        correct: "Ulysses S. Grant"
    },
    
    
];

// Global variables
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

// Function to start the quiz
function startQuiz() {
    const userName = document.getElementById("userName").value;
    if (userName.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    // Hide home page and show quiz page
    document.getElementById("homePage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";

    // Randomize and select 5 questions
    selectedQuestions = getRandomQuestions(5);
    currentQuestionIndex = 0;
    score = 0;

    // Display first question
    displayQuestion();
}

// Function to get random questions
function getRandomQuestions(num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Function to display the current question
function displayQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    document.getElementById("questionText").innerText = question.question;

    const answersContainer = document.getElementById("answersContainer");
    answersContainer.innerHTML = ""; // Clear previous answers

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(answer);
        answersContainer.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
    const correctAnswer = selectedQuestions[currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Function to show the results page
function showResults() {
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultsPage").style.display = "block";

    const resultsText = `You scored ${score} out of ${selectedQuestions.length}.`;
    document.getElementById("resultsText").innerText = resultsText;
}

// Function to start over
function startOver() {
    document.getElementById("resultsPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
}

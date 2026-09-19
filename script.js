let currentQuestion = 0;
let score = 0;

const questions = [
{
    question: "Which language is used to create the structure of a webpage?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "HTML"
},
{
    question: "Which language is used to style a webpage?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS"
},
{
    question: "Which language is commonly used for web programming?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: "JavaScript"
}
];
document.getElementById("welcome").style.display = "none";
function startQuiz() {
    document.getElementById("quiz").style.display = "block";
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("questionNumber").innerText =
    "Question " + (currentQuestion + 1) + " of 3";

let progress = ((currentQuestion + 1) / 3) * 100;

document.getElementById("progressBar").style.width =
    progress + "%";
    document.getElementById("question").innerText = q.question;
    document.getElementById("option1").innerText = q.options[0];
    document.getElementById("option2").innerText = q.options[1];
    document.getElementById("option3").innerText = q.options[2];
    document.getElementById("option4").innerText = q.options[3];
}

function checkAnswer(optionNumber) {

    const selectedAnswer =
        document.getElementById("option" + optionNumber).innerText;

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        let percentage = Math.round((score / questions.length) * 100);

        document.getElementById("quiz").innerHTML =
            "<h2>Quiz Completed!</h2>" +
            "<p>Your Score: " + score + " / " + questions.length + "</p>" +
            "<p>Percentage: " + percentage + "%</p>" +
            "<button onclick='startQuiz()'>Restart Quiz</button>";
    }
}function goHome() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("welcome").style.display = "block";
}
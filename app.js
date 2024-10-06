const questions = [
    {
        question: "Which is the largest thing in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Ripon's Third Leg", correct: true },
            { text: "Elephant", correct: false },
            { text: "Frog", correct: false },
        ]
    },
    {
        question: "Who has the smallest Penis in the world?",
        answers: [
            { text: "Rony", correct: false },
            { text: "Ripon", correct: false },
            { text: "Sujoy", correct: true },
            { text: "Bapin", correct: false },
        ]
    },
    {
        question: "At 3am, Kuntal watch ?",
        answers: [
            { text: "YouTube", correct: false },
            { text: "Facebook", correct: false },
            { text: "Instagram", correct: false },
            { text: "Chrome", correct: true }
        ]
    },
    {
        question: "How many wife Bapin has?",
        answers: [
            { text: "4", correct: true },
            { text: "3", correct: false },
            { text: "1", correct: false },
            { text: "Not sure", correct: false },
        ]
    },
    {
        question: "Jayanta like to play ",
        answers: [
            { text: "Choo kit kit", correct: false },
            { text: "Ludo", correct: false },
            { text: "Field Game", correct: false },
            { text: "Bed Game", correct: true },
        ]
    },
    {
        question: "Rony's favorite animal?",
        answers: [
            { text: "Snake", correct: false },
            { text: "Pu*sy", correct: true },
            { text: "Dog", correct: false },
            { text: "Pig", correct: false },
        ]
    },
    {
        question: "Ankit like to have a?",
        answers: [
            { text: "Big PC", correct: false },
            { text: "Big House", correct: false },
            { text: "Rassian Wife", correct: true },
            { text: "Girlfriend", correct: false },
        ]
    }
]

const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answer_buttons');
const nextBtn = document.getElementById('next_btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

const showQuestion = () => {
    reSetState();
    let currentQuestion = questions[currentQuestionIndex];
    let QuestioNo = currentQuestionIndex + 1;
    questionElement.innerHTML = QuestioNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block"
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})
startQuiz();

function reSetState() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
function showScore() {
    reSetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!` + "<br>এখানে যা হচ্ছে তার জন্য কর্তৃপক্ষ দায়ী নয়!";
    nextBtn.style.display = "block";
    nextBtn.innerHTML = "আবার মারাও";

}
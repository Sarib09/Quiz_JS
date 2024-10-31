const questions = [
    {
        question: "What is the capital of Pakistan?",
        answers: { A: "Karachi", B: "Islamabad", C: "Lahore" },
        correct: "B"
    },
    {
        question: "What year did Pakistan gain independence?",
        answers: { A: "1947", B: "1950", C: "1965" },
        correct: "A"
    },
    {
        question: "Who is known as the 'Father of the Nation' in Pakistan?",
        answers: { A: "Allama Iqbal", B: "Liaquat Ali Khan", C: "Quaid-e-Azam" },
        correct: "C"
    },
    {
        question: "Which is the national language of Pakistan?",
        answers: { A: "Punjabi", B: "Urdu", C: "Pashto" },
        correct: "B"
    },
    {
        question: "What is the largest province of Pakistan by area?",
        answers: { A: "Punjab", B: "Sindh", C: "Balochistan" },
        correct: "C"
    },
    {
        question: "What is the national sport of Pakistan?",
        answers: { A: "Cricket", B: "Hockey", C: "Football" },
        correct: "B"
    },
    {
        question: "Which is the highest mountain peak in Pakistan?",
        answers: { A: "Nanga Parbat", B: "K2", C: "Mount Everest" },
        correct: "B"
    },
    {
        question: "Who wrote the national anthem of Pakistan?",
        answers: { A: "Allama Iqbal", B: "Hafeez Jalandhari", C: "Faiz Ahmed Faiz" },
        correct: "B"
    },
    {
        question: "What is the official currency of Pakistan?",
        answers: { A: "Pakistani Dollar", B: "Pakistani Rupee", C: "Pakistani Pound" },
        correct: "B"
    },
    {
        question: "Which river is the longest in Pakistan?",
        answers: { A: "Indus River", B: "Jhelum River", C: "Ravi River" },
        correct: "A"
    }
];


let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = 0;

document.getElementById('startQuizBtn').addEventListener('click', () => {
    totalQuestions = parseInt(document.getElementById('numQuestions').value);
    if (totalQuestions < 5) totalQuestions = 5;
    startQuiz();
});

function startQuiz() {
    document.getElementById('questionSection').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    correctAnswers = 0;
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    document.getElementById('answerA').innerText = `A) ${question.answers.A}`;
    document.getElementById('answerB').innerText = `B) ${question.answers.B}`;
    document.getElementById('answerC').innerText = `C) ${question.answers.C}`;
    document.getElementById('feedback').innerText = '';
    document.getElementById('nextBtnContainer').classList.add('hidden');

    document.getElementById('answerA').onclick = () => checkAnswer('A');
    document.getElementById('answerB').onclick = () => checkAnswer('B');
    document.getElementById('answerC').onclick = () => checkAnswer('C');
}

function checkAnswer(selected) {
    const question = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback');

    if (selected === question.correct) {
        feedbackElement.innerText = "CORRECT!";
        correctAnswers++;
    } else {
        feedbackElement.innerText = `INCORRECT! The correct answer is ${question.correct}.`;
    }

    document.getElementById('nextBtnContainer').classList.remove('hidden');

    currentQuestionIndex++;
    if (currentQuestionIndex >= totalQuestions) {
        setTimeout(showResult, 2000); // Delay for 2 seconds before showing results
    }
}

document.getElementById('nextQuestionBtn').addEventListener('click', () => {
    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    }
});

function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').innerText = `You answered ${correctAnswers} out of ${totalQuestions} questions correctly (${(correctAnswers / totalQuestions * 100).toFixed(2)}%).`;
}

document.getElementById('restartQuizBtn').addEventListener('click', () => {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('questionSection').classList.remove('hidden');
});

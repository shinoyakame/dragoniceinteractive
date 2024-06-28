let currentQuizIndex = 0;
let currentScore = 0;
let totalQuiz = quizData.length;
let quizQueue = [];
let currentQuiz = {};
let stateReady = false;

function startQuiz() {
    while(quizData.length > 0) {
        let index = Math.floor(Math.random() * quizData.length);
        quizQueue.push(quizData.splice(index, 1)[0]);
    }
    nextQuiz();
}

function nextQuiz() {
    if (quizQueue.length == 0) {
        endQuiz();
    } else {
        currentQuiz = quizQueue.shift();
        $('#txtScore').text(currentScore + ' / ' + totalQuiz);
        $('#quizTitle').text(currentQuiz.quiz);
        currentQuiz.choices.forEach((item, index) => {
            $(`#choice${index + 1}`).text(item);
        });
        stateReady = true;
    }
}

function submitAnswer(answer) {
    if (!stateReady) return;
    stateReady = false;
    if (answer == currentQuiz.correct) {
        alert(`Correct! The answer is [${currentQuiz.choices[currentQuiz.correct - 1]}]`);
        currentScore += 1;
        nextQuiz();
    } else {
        alert(`Wrong answer: the correct one is [${currentQuiz.choices[currentQuiz.correct - 1]}]`);
        nextQuiz();
    }
}

function endQuiz() {
    alert('Your score is ' + currentScore + ' / ' + totalQuiz);
    // replay
    window.location.href = window.location.href;
}

$(document).ready(() => {
    startQuiz();
});
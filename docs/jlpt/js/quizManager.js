let currentQuizIndex = 0;
let currentScore = 0;
let totalQuiz = quizData.length;
let quizQueue = [];
let currentQuiz = {};
let stateReady = false;

let correctNotifyInterval = null;
let intervalStepMilliSecond = 10;
let correctTimeOffset = 0; // 0 mean not showing
let correctShowTimeInSeconds = 5;

function startQuiz() {
    // reset
    quizQueue = [];
    currentQuizIndex = 0;
    currentScore = 0;

    let cloneQuiz = [...quizData];
    while(cloneQuiz.length > 0) {
        let index = Math.floor(Math.random() * cloneQuiz.length);
        quizQueue.push(cloneQuiz.splice(index, 1)[0]);
    }
    nextQuiz();
}

function nextQuiz() {
    if (quizQueue.length == 0) {
        endQuiz();
    } else {
        currentQuiz = quizQueue.shift();
        currentQuizIndex++;
        let percent = 100;
        if (currentQuizIndex - 1 > 0) {
            percent = Math.floor(currentScore * 100 / (currentQuizIndex - 1));
        }
        $('#txtScore').text(`${currentScore} / ${currentQuizIndex - 1} (${percent}%) Total Quiz: ${totalQuiz}`);
        $('#quizTitle').text(`(${currentQuizIndex}). ${currentQuiz.quiz}`);
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
        triggerCorrectNotify();
        //alert(`Correct! The answer is [${currentQuiz.choices[currentQuiz.correct - 1]}]`);
        currentScore += 1;
        nextQuiz();
    } else {
        alert(`Wrong answer: the correct one is [${currentQuiz.choices[currentQuiz.correct - 1]}]`);
        nextQuiz();
    }
}

function triggerCorrectNotify() {
    correctTimeOffset = correctShowTimeInSeconds; // show text
}

function correctOpacityInterval() {
    let percent = correctTimeOffset / correctShowTimeInSeconds;
    $('#txtPreviousQuestionStatus').css('opacity', percent);
    correctTimeOffset -= (intervalStepMilliSecond / 1000);
    if (correctTimeOffset < 0) {
        correctTimeOffset = 0;
    }
}

function endQuiz() {
    let percent = Math.floor(currentScore * 100 / totalQuiz);
    alert(`Your score is ${currentScore} / ${totalQuiz} (${percent}%)`);
    // replay
    startQuiz();
}

$(document).ready(() => {
    correctNotifyInterval = setInterval(() => {
        correctOpacityInterval();
    }, intervalStepMilliSecond)
    startQuiz();
});
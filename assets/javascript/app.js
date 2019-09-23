// Initial Values
let counter = 30;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;


// Display the question and the answer together in browser

function loadQuestion(){
    const question = quizQuestions[currentQuestion].question; //
    const choices = quizQuestions[currentQuestion].choices; //

    $('#time').html('Time: ' + counter);
    $('#game').html('<h4>' + question + '</h4>');
}

loadQuestion();

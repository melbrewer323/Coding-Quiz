var startBtnEl = document.querySelector("#startButton");
var homePageEl = document.querySelector(".homePage");
var questionContainerEl = document.querySelector("#questionContainer");

startBtnEl.addEventListener("click", startgame)

var questions = [
	{
		question: "Which of the following is not a way to declare a variable?",
		answers: {
			btn1: 'var',
			btn2: 'set',
			btn3: 'let',
            btn4: 'const'
		},
		correctAnswer: 'btn2'
	},
	{
		question: "An array always begins at an index of:",
		answers: {
			btn1: '-1',
			btn2: '2',
			btn3: '1',
            btn4: '0'
		},
		correctAnswer: 'btn4'
	},
    {
		question: "Inside which HTML element do we put the JavaScript?",
		answers: {
			btn1: '<javascript>',
			btn2: '<script>',
			btn3: '<js>',
            btn4: '<scripting>'
		},
		correctAnswer: 'btn2'
	},
    {
		question: "Which operator is used to assign a value to a variable?",
		answers: {
			btn1: '=',
			btn2: 'x',
			btn3: '-',
            btn4: '*'
		},
		correctAnswer: 'btn1'
	},
];

function startgame() {
    console.log("started")
    homePageEl.classList.add("hide")
    questionContainerEl.classList.remove("hide")
    setNextQuestion()

}


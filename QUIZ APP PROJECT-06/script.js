const questionElement = document.getElementById('questions')
const answerButton = document.getElementById('answers')
const nextbutton = document.getElementById('new-btn')


const questions = [
    {
        question : "What does HTML stand for?",
        answers : [
            {text: "Hyper Trainer Marking Language",correct:false},
            {text: "Hyper Text Markup Language",correct:true},
            {text: "Hyper Text Marketing Language",correct:false},
            {text: "Hyper Tool Multi Language",correct:false}
        ]
    },
    {
        question : "Which JavaScript method is used to select an element by ID?",
        answers : [
            {text: "querySelectorAll()",correct:false},
            {text: "getElementByClass()",correct:false},
            {text: "getElementById()",correct:true},
            {text: "selectById()",correct:false}
        ]
    },
    {
        question : "Which company developed JavaScript?",
        answers : [
            {text: "Microsoft",correct:false},
            {text: "Google",correct:false},
            {text: "Netscape",correct:true},
            {text: "Oracle",correct:false}
        ]
    },
    {
        question : "What does CSS stand for?",
        answers : [
            {text: "Creative Style System",correct:false},
            {text: "Cascading Style Sheets",correct:true},
            {text: "Computer Style Sheets",correct:false},
            {text: "Colorful Style Sheets",correct:false}
        ]
    },
]


// whenever we start the quiz we need to store quesxtion index and score when we give answers.
let currentquestionIndex = 0;
let score = 0;

// to start the quiz
function startQuiz() {
    currentquestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = `Next`
    showQuestion()
}

// This function displays the question
function showQuestion() {
    resetState()
    let currentquestion = questions[currentquestionIndex]
    let questionNo = currentquestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentquestion.question 

    currentquestion.answers.forEach((answer)=>{
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButton.appendChild(button)
          if (answer.correct) {
            button.dataset.correct = answer.correct;
          }
        button.addEventListener('click',selectanswer)
    })
}


function resetState() {
    nextbutton.style.display = "none"
  answerButton.innerHTML = "";
}

function selectanswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('correct')
        score++;
    } else{
        selectedBtn.classList.add('incorrect')

    }

    Array.from(answerButton.children).forEach(button=>{
        if (button.dataset.correct === 'true') {
        button.classList.add('correct')
            
        }
        button.disabled = true
    })
    nextbutton.style.display = 'block'

}



function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextbutton.innerHTML = "Play Again"
    nextbutton.style.display = "block"
}
function Handlenextquestion() {
     currentquestionIndex++;
     if (currentquestionIndex < questions.length) {
        showQuestion()
     } else{
        showScore()
     }
}
nextbutton.addEventListener('click',()=>{
     if (currentquestionIndex < questions.length) {
        Handlenextquestion()
     } else{
        startQuiz()
     }

})
startQuiz()


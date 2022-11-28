const quizData = [
    {
        question: "Find the greatest number that will divide 43,91 and 183 so as to leave the same remainder in each case",
        a: "4",
        b: "7",
        c: "9",
        d: "13",
        correct: "a",
    },
    {
        question: "The greatest number of four digits which is divisible by 15,25,40 and 75 is",
        a: "9000",
        b: "9400",
        c: "9600",
        d: "9800",
        correct: "c",
    },
    {
        question: "Three number are in the ratio of 3:4:5 and their L.C.M is 2400 Their H.C.F is",
        a: "40",
        b: "80",
        c: "120",
        d: "200",
        correct: "a",
    },
    {
        question: "Find the lowest common multiple of and 40 24,36",
        a: "120",
        b: "240",
        c: "360",
        d: "480",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

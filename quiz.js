const quizData = [
    { question: "Mi binárisról decimálisra átváltva a következő szám értéke? 100111010", options: ["256", "456", "521", "314"], answer: 3 },
    { question: "Az alábbiak közül melyik nem szerepelhet egy decimális számban?", options: ["5", "9", "B", "0"], answer: 2 },
    { question: "Melyik számrendszerre példa az igaz/hamis feladat", options: ["decimális", "bináris", "hexadecimális", "oktális"], answer: 1 },
    { question: "Mi hexadecimálisról decimálisra átváltva a következő szám értéke? 10B", options: ["184", "952", "267", "523"], answer: 2 },
    { question: "Melyik a 16-os számrendszer?", options: ["Hexademimális", "oktális", "bináris", "decimális"], answer: 0 },
    { question: "Melyik a 10-es számrendszer?", options: ["Hexademimális", "oktális", "bináris", "decimális"], answer: 3 },
    { question: "Mi oktálisról binárisra átváltva a következő szám értéke? 2312", options: ["10001111011", "11010001110", "110110001001", "10011001010"], answer: 3 },
    { question: "Mi binárisról hexadecimálisra átváltva a következő szám értéke? 1100", options: ["5", "3", "C", "8"], answer: 2 },
    { question: "Az alábbiak közül melyik nem szerepelhet egy hexadecimális számban?", options: ["B", "G", "F", "C"], answer: 1 },
    { question: "Mi decimálisról oktálisra átváltva a következő szám értéke? 752981", options: ["2676525", "2176912", "1942128", "3751449"], answer: 0 }
];

let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    document.body.style.backgroundColor = "rgba(20, 40, 40, 0.8)";
    let q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    options.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.style.background = "#ffffff";
        btn.disabled = false;
    });
    nextBtn.classList.add("hidden");
}

function selectAnswer(index) {
    let correct = quizData[currentQuestion].answer;
    if (index === correct) {
        score++;
        options[index].style.background = "green";
        document.body.style.backgroundColor = "#3d9c2f";
    } else {
        options[index].style.background = "red";
        options[correct].style.background = "green";
        document.body.style.backgroundColor = "#9c2f2f";
    }
    options.forEach(btn => btn.disabled = true);
    scoreEl.innerText = "Pont: " + score;
    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.body.style.backgroundColor = "rgba(20, 40, 40, 0.8)";
        questionEl.innerText = "Quiz Befejezve!";
        options.forEach(btn => btn.style.display = "none");
        nextBtn.style.display = "none";
    }
}

loadQuestion();

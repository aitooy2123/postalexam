let qIdx = 0;
let score = 0;
let timer = null;
let timeLeft = 300;

function resetExamView() {
    document.getElementById('exam-intro').classList.remove('hidden');
    document.getElementById('exam-process').classList.add('hidden');
    document.getElementById('exam-summary').classList.add('hidden');
    clearInterval(timer);
}

function startExamAction() {
    qIdx = 0;
    score = 0;
    timeLeft = 300;

    document.getElementById('exam-intro').classList.add('hidden');
    document.getElementById('exam-process').classList.remove('hidden');

    startTimer();
    showQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-box').innerText = timeLeft;

        if(timeLeft <= 0) finishExam();
    },1000);
}

function showQuestion() {
    const q = examPool[qIdx];
    const container = document.getElementById('q-card');

    container.innerHTML = `
        <h3>${q.q}</h3>
        ${q.opts.map((o,i)=>`
            <button onclick="handleAnswer(${i})">${o}</button>
        `).join('')}
    `;
}

function handleAnswer(i) {
    if(i === examPool[qIdx].ans) score++;
    qIdx++;

    if(qIdx < examPool.length) showQuestion();
    else finishExam();
}

function finishExam() {
    clearInterval(timer);
    document.getElementById('exam-process').classList.add('hidden');
    document.getElementById('exam-summary').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
}

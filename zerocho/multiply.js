const questionDiv = document.querySelector('.question'),
    time = document.querySelector('.time'),
    form = document.querySelector('.form'),
    input = document.querySelector('.input'),
    startButton = document.querySelector('.start-button'),
    enterButton = document.querySelector('.enter-button'),
    historyOl = document.querySelector('.history-list'),
    scoreDiv = document.querySelector('.score');

function random() {
    return Math.ceil(Math.random()*7 + 2);
}

let num1 = random(),
    num2 = random(),
    timer = 10.0,
    score = 0,
    isOver = false;

questionDiv.textContent = `${num1} x ${num2} = `;
startButton.focus();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if ( isOver ) return;

    let classname;
    
    if ( Number(input.value) === num1 * num2 ) {
        num1 = random();
        num2 = random();
        questionDiv.textContent = `${num1} x ${num2} = `;
        score = score + 100;
        classname = 'correct';
    } else {
        score = score - 100;
        classname = 'incorrect';
    }
    scoreDiv.textContent = score;
    historyOl.innerHTML += `<li class="${classname}">${num1} x ${num2} = ${input.value}</li>`;
    input.value = '';
    input.focus();
});

startButton.addEventListener('click', () => {
    time.textContent = timer;
    setTimeout(() => {
        isOver = true;
        clearInterval(timerId);
        time.textContent = 'GAME OVER';
    }, timer*1000);

    const timerId = setInterval(() => {
        timer = parseFloat(timer - 0.1).toFixed(1);
        time.textContent = timer;
    }, 100);

    input.value = '';
    input.focus();
})
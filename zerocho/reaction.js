const screen = document.querySelector('.screen');
let startTime, endTime, timer;

screen.addEventListener('click', (e) => {
    switch (screen.dataset.status) {
        case 'waiting':
            screen.dataset.status = 'ready';
            screen.textContent = 'wait for green';
            timer = setTimeout(()=>{
                screen.click();
                startTime = new Date();
            }, Math.random()*3000 + 1000);
        break;
        case 'ready':
            clearTimeout(timer);
            screen.dataset.status = 'now';
            screen.textContent = 'click now!';
        break;
        case 'now':
        endTime = new Date();
        screen.dataset.status = 'waiting';
            screen.textContent = `${endTime - startTime}ms`;
        break;
    }
});

/* TODO
1. waiting 일때 클릭 처리(실패)
2. 3회 루프 및 /평균 출력
*/
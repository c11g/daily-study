const img = document.querySelector('.img'),
    buttons = document.querySelectorAll('.button'),
    reload = document.querySelector('.reload'),
    resultDiv = document.querySelector('.result'),
    userWinStrong = document.querySelector('.userWin'),
    computerWinStrong = document.querySelector('.computerWin'),
    drawStrong = document.querySelector('.draw'),
    classArr = ['scissors', 'rock', 'paper'],
    handsMap = {
        'scissors': -1,
        'rock': 0,
        'paper': 1,
    };

let timerId,
    userWinCount = 0,
    computerWinCount = 0,
    drawCount = 0;

function rotatingImg() {
    let i = 0;
    timerId = setInterval(() => {
        img.className = `img ${classArr[i]}`;
        i++;
        if (i === classArr.length ) i = 0;
    }, 100);
    resultDiv.textContent = '';
}

function shoot(e) {
    let userHands = handsMap[e.target.dataset.hands],
        computerHands = handsMap[img.className.split(' ')[1]];
    
    clearInterval(timerId);
    let winner = getWinner(userHands, computerHands);
    
    if ( winner === userHands ) {
        resultDiv.textContent = '축하합니다. 당신이 승리했습니다!'
        userWinCount++;
        userWinStrong.textContent = userWinCount;
    } else if ( winner === computerHands ) {
        resultDiv.textContent = '아쉽네요. 당신이 지셨습니다.'
        computerWinCount++;
        computerWinStrong.textContent = computerWinCount;
    }
}

function getWinner(userHands, computerHands) {
    if ( userHands === computerHands) {
        resultDiv.textContent = '비겼습니다.';
        drawCount++;
        drawStrong.textContent = drawCount;
        return 'draw';
    } else if (Math.abs(userHands) === Math.abs(computerHands)) {
        return Math.min(userHands, computerHands);
    } else {
        return Math.max(userHands, computerHands);
    }
} 

// 1. 이미지를 돌린다.
rotatingImg();

// 2. 이미지를 멈춘다.
buttons.forEach(item => item.addEventListener('click', shoot));
reload.addEventListener('click', rotatingImg);
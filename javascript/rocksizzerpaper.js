const img = document.querySelector('.img'),
    buttons = document.querySelectorAll('.button'),
    reload = document.querySelector('.reload'),
    resultDiv = document.querySelector('.result'),
    userWinStrong = document.querySelector('.userWin'),
    computerWinStrong = document.querySelector('.computerWin'),
    drawStrong = document.querySelector('.draw'),
    classArr = ['sizzer', 'rock', 'paper'],
    computerHandsMap = {
        'sizzer': -1,
        'rock': 0,
        'paper': 1,
    };

let time,
    userWinCount = 0,
    computerWinCount = 0,
    drawCount = 0;

function rotatingImg() {
    let i = 0;
    time = setInterval(() => {
        img.className = `img ${classArr[i]}`;
        i++;
        if (i === classArr.length ) i = 0;
    }, 100);
    resultDiv.textContent = '';
}

function cb(e) {
    let userHands = Number(e.target.dataset.hands),
        computerHands = computerHandsMap[img.className.split(' ')[1]];
    clearInterval(time);
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
buttons.forEach(item => item.addEventListener('click', cb));
reload.addEventListener('click', rotatingImg);
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
	clearInterval(timerId);
    let i = 0;
    timerId = setInterval(() => {
        img.className = `img ${classArr[i]}`;
        i++;
        if (i === classArr.length ) i = 0;
    }, 100);
    resultDiv.textContent = '';
}

function shoot(e) {
	clearInterval(timerId);
	
	let userHands = handsMap[e.target.dataset.hands],
		computerHands = handsMap[img.className.split(' ')[1]],
		winner = getWinner(userHands, computerHands);
    
    if ( winner === userHands ) {
        resultDiv.textContent = '축하합니다. 당신이 승리했습니다!'
        userWinStrong.textContent = ++userWinCount;
    } else if ( winner === computerHands ) {
        resultDiv.textContent = '아쉽네요. 당신이 지셨습니다.'
        computerWinStrong.textContent = ++computerWinCount;
    } else if ( winner === 'draw') {
		resultDiv.textContent = '비겼습니다.';
		drawStrong.textContent = ++drawCount;
	}
}

function getWinner(userHands, computerHands) {
    if ( userHands === computerHands) {
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
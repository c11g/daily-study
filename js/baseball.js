const form = document.querySelector('form'),
    input = document.querySelector('input'),
    button = document.querySelector('button'),
    countEM = document.querySelector('em'),
    resultP = document.querySelector('p'),
    historyOL = document.querySelector('ol');

let answer = '',
    userAnswer = '',
    result = '',
    history = '',
    count = 10;

function random(length) {
    return Math.floor(Math.random()*length);    
};

function makeAnswer() {
    let numberArr = [1,2,3,4,5,6,7,8,9],
    _answer = '';

    for (let i=0; i<4; i++) {
        let select = numberArr.splice(random(9-i), 1)[0];
        _answer = _answer + select;
    }

    return _answer;
}

function compareAnswer(answer, userAnswer) {
    let strike = 0,
        ball = 0;

    for (let i=0; i<4; i++) {
        if ( answer[i] === userAnswer[i] ) {
            strike++;
        } else if ( answer.indexOf(userAnswer[i]) !== -1 ) {
            ball++;
        }
    }

    return `${strike}S ${ball}B`;
}

// 1. 컴퓨터가 임의의 숫자 4자리 저장(안겹치게)
answer = makeAnswer();
input.focus();
console.log(`정답은 ${answer}`);

// events
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if ( input.value.length !== 4 ) {
        // 0. 입력 오류
        resultP.textContent = `4자리 숫자를 입력해주세요!`;
        input.focus();
    } else {
        // 2. 유저 숫자 저장
        userAnswer = input.value;
        
        // 3. 답을 확인
        if ( answer === userAnswer ) {
            result = `홈런! 정답은 ${answer} 입니다.`;
            answer = makeAnswer();
            console.log(`다음 정답은 ${answer}`);
            count = 10;
            history = '';
        } else {
            result = compareAnswer(answer, userAnswer);
            count--;
            if ( count === 0 ) {
                // 횟수 초과
                result = `10번 모두 실패하였습니다. 정답은 ${answer} 입니다.`;
                answer = makeAnswer();
                console.log(`다음 정답은 ${answer}`);
                count = 10;
                history = '';
            } else {
                history += `<li>${userAnswer} -- ${result}</li>`;
                console.log('화이팅!');
            }
        }
        resultP.textContent = result;
        countEM.textContent = count;
        historyOL.innerHTML = history;
        input.value = '';
        input.focus();
    } 
});
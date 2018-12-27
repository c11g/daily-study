function random() {
    return Math.floor(Math.random()*9)+1;
}

let num1, num2, isQuit = false; 

while ( true ) {
    // 문제 제시
    num1 = random(),
    num2 = random();
    
    // 종료 조건
    if ( isQuit ) break;
    
    while ( true ) {
        answer = prompt(`${num1} X ${num2} = `);
        
        // 답 비교
        if ( Number(answer) === num1 * num2 ) {
            alert(`정답`);
            break;
        } else if ( answer === null ) {
            isQuit = true;
            break;
        } else {
            alert(`땡`)
        }
    }
}

alert(`게임 종료!`)
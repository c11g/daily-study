const tictactoeDiv = document.querySelector('.tictactoe-wrapper'),
    resultP = document.querySelector('p'),
    newGameButton = document.querySelector('.button-init');

let colArr = Array.prototype.slice.call(tictactoeDiv.querySelectorAll('button')), // nodeList -> Array
    candidateArr = colArr.filter(item => item.textContent === ''), // 클릭 가능한 칸
    turn = 'x', // X: 유저, O: 컴퓨터
    timer;

// 1. 3by3 준비
// events register
colArr.forEach(item => item.addEventListener('click', cb));
newGameButton.addEventListener('click', init);

function cb(e) {
    let col = e.target;

    // 3. 칸이 클릭 가능한가?
    if ( candidateArr.includes(col) ) {
        // 3Y: 칸에 값을 채운다.
        col.textContent = turn;
        col.classList.add(turn);
        // 클릭 가능한 칸 업데이트
        candidateArr = colArr.filter(item => item.textContent === '');
        
        // 4. 연결된 세 칸이 완성되었나?
        if ( confirmWinCondition(col) ) {
            // 4Y: 승리 문구 출력
            resultP.textContent = `${turn}님이 승리하셨습니다.`;
            // remove click event!
            colArr.forEach(item=>item.removeEventListener('click', cb));
            return;
        } else if ( candidateArr.length < 1 ) {
            resultP.textContent = '무승부입니다.'
            // remove click event!
            colArr.forEach(item=>item.removeEventListener('click', cb));
            return;
        } else {
            // 4N: 턴 넘김
            turn = (turn === 'x') ? 'o' : 'x';

            // 컴퓨터 턴이면
            if ( turn === 'o') {
                tictactoeDiv.style.pointerEvents = 'none';
                timer = setTimeout(()=>{
                    candidateArr[Math.floor(Math.random() * candidateArr.length)].click();
                    tictactoeDiv.style.pointerEvents = 'initial';
                }, 1000);   
            }
        }
    } else {
        // 3N: 다른 칸 클릭하도록 문구 출력!
        resultP.textContent = '다른 칸을 클릭해주세요.';
        return;
    }
}

function confirmWinCondition(col) {
    let _row = col.dataset.row,
        _col = col.dataset.col,
        _arr, isWin;
    
    // 가로 검사
    _arr = colArr.filter(item => _row === item.dataset.row);
    isWin = _arr.every(item => item.textContent === turn);
    if ( isWin ) return isWin;
    
    // 세로 검사
    _arr = colArr.filter(item => _col === item.dataset.col);
    isWin = _arr.every(item => item.textContent === turn);
    if ( isWin ) return isWin;
    
    // \ 대각선
    if ( Number(_row) - Number(_col) === 0 ) {
        _arr = colArr.filter(item => item.dataset.row === item.dataset.col);
        isWin = _arr.every(item => item.textContent === turn);
        if ( isWin ) return isWin;
    }
    
    // / 대각선
    if ( Number(_row) + Number(_col) === 2 ) {
        _arr = colArr.filter(item => Number(item.dataset.row) + Number(item.dataset.col) === 2);
        isWin = _arr.every(item => item.textContent === turn);
        if ( isWin ) return isWin;
    }

    return isWin;
}

// 초기화
function init() {
    colArr.forEach(item => {
        item.textContent = '';
        item.className = '';
    }); // 화면 초기화
    candidateArr = colArr.filter(item => item.textContent === ''); // 클릭 가능한 칸 초기화
    colArr.forEach(item => item.addEventListener('click', cb)); // events register
    turn = 'x'; // turn 초기화
    resultP.textContent = '';
}

/* TODO
1. [v] 컴퓨터 턴(인공지능 x)
    - 컴퓨터 턴일 때 사용자 클릭 막음
2. [v] 무승부 메시지
3. [v] new Game
*/
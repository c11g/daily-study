const tictactoeDiv = document.querySelector('.tictactoe-wrapper'),
    colArr = Array.prototype.slice.call(tictactoeDiv.querySelectorAll('button')),
    resultP = document.querySelector('p'),
    tictactoeArr = [[],[],[]];

let turn = 'x',
    isWin = false;

// 1. 3by3 준비
colArr.forEach(item => {
    tictactoeArr[item.dataset.row][item.dataset.col] = item;
    // 2. register click event!
    item.addEventListener('click', cb);
});

function cb(e) {
    let col = e.target;

    // 3. 칸이 비어있는가?
    if ( col.textContent === '' ) {
        // 3Y: 칸에 값을 채운다.
        col.textContent = turn;
        col.classList.add(turn);
        
        // 4. 연결된 세 칸이 완성되었나?
        if ( confirmWinCondition(col) ) {
            // 4Y: 승리 문구 출력
            resultP.textContent = `${turn}님이 승리하셨습니다.`;
            // remove click event!
            colArr.forEach(item=>item.removeEventListener('click', cb));
        } else {
            // 4N: 턴 넘김
            turn = (turn === 'x') ? 'o' : 'x';
        }
    } else {
        // 3N: 다른 칸 클릭하도록 문구 출력!
        resultP.textContent = '다른 칸을 클릭해주세요.';
    }
}

function confirmWinCondition(col) {
    let _row = col.dataset.row,
        _col = col.dataset.col,
        _arr;
    
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

    // 가로 검사
    isWin = tictactoeArr[_row].every(item => item.textContent === turn);
    if ( isWin ) return isWin;
    
    // 세로 검사
    _arr = tictactoeArr.map(item => item[_col]);
    isWin = _arr.every(item => item.textContent === turn);
    if ( isWin ) return isWin;
    
    return isWin;
}
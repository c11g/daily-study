const tictactoeDiv = document.querySelector('.tictactoe-wrapper'),
    cols = tictactoeDiv.querySelectorAll('button'),
    resultP = document.querySelector('p'),
    tictactoeArr = [[],[],[]];

let turn = 'x',
    isWin = false;

// 1. 3by3 준비
cols.forEach(item => {
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
            cols.forEach(item=>item.removeEventListener('click', cb));
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
        _col = col.dataset.col;

    if ( Number(col.dataset.row) - Number(col.dataset.col) === 0 ) {
        // \ 대각선
        console.log(`1대각 검사`)
    }
    
    if ( Number(col.dataset.row) + Number(col.dataset.col) === 2 ) {
        // / 대각선
        console.log(`2대각 검사`)
    }

    // 가로 검사
    cols.forEach(item => {
        if ( item.dataset.row === _row ) {
            item.textContent === turn;
            
            return item.textContent === turn;
        }    
    });
    
    // .every(item) => {
    //     if ( item.dataset.row === _row ) {
    //         console.log(index, item.dataset.row, _row);
    //         isWin = (item.textContent === turn) ? true : false;
    //     }
    // });
    console.log(isWin)
    // 세로 검사

    return isWin;
}
const wrapDiv = document.querySelector('.mine-wrap'),
    executeButton = document.querySelector('.button-execute'),
    resultP = document.querySelector('.result');

let mine = 'X',
    columnArr = [];

// 1. 판 그리기
function makeMap(){
    // 뷰, 모델 초기화
    wrapDiv.classList.remove('is-over');
    wrapDiv.innerHTML = '';
    resultP.textContent = '';
    columnArr = [];
    
    let colCount = parseInt(document.querySelector('.col-count').value),
        rowCount = parseInt(document.querySelector('.row-count').value),
        mineCount = parseInt(document.querySelector('.mine-count').value);

    wrapDiv.style.width = `${25*colCount}px`;

    for (let _row=0; _row<rowCount; _row++) {
        columnArr[_row] = [];
        for(let _col=0; _col<colCount; _col++){
            let button = document.createElement('button');
            button.dataset.row = _row;
            button.dataset.col = _col;
            columnArr[_row][_col] = button;
            wrapDiv.appendChild(button);
        }
    }

    // 2. 지뢰 심기
    let shuffle = getRandomArr(mineCount, rowCount*colCount);
    shuffle.forEach((item) => {
        let _row = Math.floor(item/colCount),
            _col = item%colCount;
        columnArr[_row][_col].dataset.mine = mine;
    });
}

// 난수 찾기(피셔예이츠)
function getRandomArr(n, range) {
    let arr = [...Array(range).keys()],
        iterationCount = arr.length - n,
        shuffle = [];
    
    while ( arr.length > iterationCount ) {
        let item = arr.splice(Math.floor(Math.random()*arr.length),1)[0];
        shuffle.push(item);
    }

    return shuffle;
}

// 시작 이벤트
executeButton.addEventListener('click', makeMap);

// 우클릭 이벤트
wrapDiv.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
    let _row = parseInt(e.target.dataset.row),
        _col = parseInt(e.target.dataset.col),
        _column = columnArr[_row][_col];
    
    if ( _column.textContent === '' ) {
        _column.textContent = '!';
    } else if ( _column.textContent === '!' ) {
        _column.textContent = '?';
    } else {
        _column.textContent = '';
    }
});

// 좌클릭 이벤트
wrapDiv.addEventListener('click', (e)=>{
    let _row = parseInt(e.target.dataset.row),
        _col = parseInt(e.target.dataset.col),
        _column = columnArr[_row][_col];
    
    if ( _column.dataset.mine === mine ) {
        // 지뢰면 게임 종료
        resultP.textContent = '펑!! 게임 종료';
        wrapDiv.classList.add('is-over');
    } else {
        // 지뢰가 아니면 이웃칸 확인
        let _neighborColumnArr = [];
        // 윗 줄 3칸
        if ( columnArr[_row-1] ) {
            _neighborColumnArr.push(columnArr[_row-1][_col-1]);
            _neighborColumnArr.push(columnArr[_row-1][_col]);
            _neighborColumnArr.push(columnArr[_row-1][_col+1]);
        }
        // 같은 줄 2칸
        _neighborColumnArr.push(columnArr[_row][_col-1]);
        _neighborColumnArr.push(columnArr[_row][_col+1]);
        // 아랫 줄 3칸
        if ( columnArr[_row+1] ) {
            _neighborColumnArr.push(columnArr[_row+1][_col-1]);
            _neighborColumnArr.push(columnArr[_row+1][_col]);
            _neighborColumnArr.push(columnArr[_row+1][_col+1]);
        }

        _neighborColumnArr = _neighborColumnArr.filter(item => item).filter(item => item.dataset.mine === mine);
        _column.textContent = _neighborColumnArr.length;
    }
});

// TODO
// 1. 타이머
// 2. !, ? 의 스타일
// 3. 게임 종료 시 클릭 이벤트 제거
// 4. 사운드 삽입(BG, 클릭, 펑)
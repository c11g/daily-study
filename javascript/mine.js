const wrapDiv = document.querySelector('.mine-wrap'),
    executeButton = document.querySelector('.button-execute'),
    time = document.querySelector('.time'),
    resultP = document.querySelector('.result');

let colCount = null,
    rowCount = null,
    mineCount = null,
    mine = 'X',
    columnArr = [],
    openColumn = 0,
    stopFlag = false,
    timerId = null;

    // 1. 판 그리기
function makeMap() {
    // 뷰, 모델 초기화
    stopFlag = false;
    columnArr = [];
    openColumn = 0;
    wrapDiv.innerHTML = '';
    timerId = startTimer(timerId);
    time.textContent = '0';
    // wrapDiv.classList.remove('is-over');
    resultP.textContent = '';

    colCount = parseInt(document.querySelector('.col-count').value);
    rowCount = parseInt(document.querySelector('.row-count').value);
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

// timer
function startTimer(timerId) {
    let seconds = 0;
    clearInterval(timerId);
    timerId = setInterval(()=>{
        seconds++;
        time.textContent = seconds;
    }, 1000);
    return timerId;
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
executeButton.addEventListener('click', ()=>{
    makeMap();
});

// 우클릭 이벤트
wrapDiv.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
    if ( stopFlag ) return;
    let _row = parseInt(e.target.dataset.row),
        _col = parseInt(e.target.dataset.col),
        _column = columnArr[_row][_col];
    
    if ( _column.textContent === '' ) {
        _column.textContent = '!';
    } else if ( _column.textContent === '!' ) {
        _column.textContent = '?';
    } else {
        _column.textContent = '';
        _column.classList.remove('is-opened');
    }
});
var count = 0;
// 좌클릭 이벤트
wrapDiv.addEventListener('click', (e)=>{
    console.log(`click count: ${count++}`);
    let _row = parseInt(e.target.dataset.row),
        _col = parseInt(e.target.dataset.col),
        _column = columnArr[_row][_col];
    
    if ( stopFlag || _column.classList.contains('is-opened') ) {
        console.log("게임 중단 상태이거나, 이미 열려있는 칸")
        return;
    }
    
    if ( !_column.classList.contains('is-opened') ) {
        openColumn++;
        _column.classList.add('is-opened');
    }

    if ( _column.dataset.mine === mine ) {
        // 지뢰면 게임 종료
        stopFlag = true;
        clearInterval(timerId);
        resultP.textContent = '펑!! 게임 종료';
        _column.classList.add('is-error');
        wrapDiv.classList.add('is-over');
    } else if ( openColumn === colCount * rowCount - mineCount ) {
        // 모든 칸을 다 열면 게임 종료
        stopFlag = true;
        clearInterval(timerId);
        wrapDiv.classList.add('is-over');
        resultP.textContent = '축하합니다. 지뢰 찾기를 성공했어요.';
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
        
        _neighborColumnArr = _neighborColumnArr.filter(item => !!item);
        _column.textContent = _neighborColumnArr.filter(item => item.dataset.mine === mine).length || '';
        
        if ( !_column.textContent ) {
            
        }
    }
});

// TODO
// [V] 1. 지뢰 0개이면 주변 칸 열기(재귀적으로.. 열린 칸을 확인 하는 작업)
// [V] 2. 타이머
// [ ] 3. 종료 조건 확인
// [ ] 4. 게임 종료 시 클릭 이벤트 제거
// [ ] 5. !, ? 및 칸 스타일
// [ ] 6. 사운드 삽입(BG, 클릭, 펑)
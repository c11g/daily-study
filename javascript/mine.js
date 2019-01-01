const wrapDiv = document.querySelector('.mine-wrap'),
    executeButton = document.querySelector('.button-execute');

let dataArr = [];

// 1. 판 그리기
function makeMap(){
    // 태그 및 배열 데이터 초기화
    wrapDiv.innerHTML = '';
    dataArr = [];
    let colCount = parseInt(document.querySelector('.col-count').value),
        rowCount = parseInt(document.querySelector('.row-count').value),
        mineCount = parseInt(document.querySelector('.mine-count').value);

    wrapDiv.style.width = `${25*colCount}px`;

    for (let _row=0; _row<rowCount; _row++) {
        dataArr[_row] = [];
        for(let _col=0; _col<colCount; _col++){
            let button = document.createElement('button');
            button.dataset.row = _row;
            button.dataset.col = _col;
            dataArr[_row][_col] = button;
            wrapDiv.appendChild(button);
        }
    }

    // 2. 지뢰 심기
    let shuffle = getRandomArr(mineCount, rowCount*colCount);
    shuffle.forEach((item) => {
        let _row = Math.floor(item/colCount),
            _col = item%colCount;
            console.log(item,_row,_col);
        dataArr[_row][_col].dataset.status = 'X';
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
    let _button = e.target,
        _buttonRow = e.target.dataset.row,
        _buttonCol = e.target.dataset.col;
    
    dataArr[_buttonRow][_buttonCol].dataset.status = '!';
})
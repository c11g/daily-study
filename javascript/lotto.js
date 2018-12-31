const resultDiv = document.querySelector('.result'),
    bonusDiv = document.querySelector('.bonus');

let numberArr = [];
for (let i=0; i<45; i++) {
    numberArr.push(i+1);
}

let shuffleArr = [];
while ( numberArr.length > 0 ) {
    let _item = numberArr.splice( Math.floor(Math.random()*numberArr.length), 1)[0];
    shuffleArr.push(_item);
}

let winNumberArr = shuffleArr.slice(0,6).sort((a,b) => a-b);
winNumberArr.push(shuffleArr[shuffleArr.length-1]);

for (let i=0; i<winNumberArr.length; i++) {
    let ball = document.createElement('strong');
    ball.textContent = winNumberArr[i];
    switch ( true ) {
        case winNumberArr[i] < 10:
        ball.dataset.level = 1;
        break;
        case winNumberArr[i] < 20:
        ball.dataset.level = 2;
        break;
        case winNumberArr[i] < 30:
        ball.dataset.level = 3;
        break;
        case winNumberArr[i] < 40:
        ball.dataset.level = 4;
        break;
        default:
        ball.dataset.level = 5;
    }
    setTimeout(()=>{
        if ( i === winNumberArr.length-1 ) {
            bonusDiv.append(ball);
            ball.className = 'ball bonus';
        } else {
            resultDiv.append(ball);
            ball.className = 'ball';
        }
    }, 1000*i);
}
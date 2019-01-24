
const cardWrapperUl = document.querySelector('.card-wrapper'),
    newGameButton = document.querySelector('.button-new');

let cardNumber = parseInt(document.querySelector('.button-card-number').value);

// li.card-list 만들기
function makeCard() {
    let li = document.createElement('li'),
        inner = document.createElement('div'),
        cardBack = document.createElement('button'),
        cardFront = document.createElement('button');

    li.className = 'card-list';
    inner.className = 'card-inner';
    cardBack.className = 'card card-back';
    cardFront.className = 'card card-front';
    inner.append(cardBack, cardFront);
    li.appendChild(inner)
    
    return { li: li, cardBack: cardBack, cardFront: cardFront};
}

// 새 게임 시작 이벤트
newGameButton.addEventListener('click', ()=>{
    cardNumber = parseInt(document.querySelector('.button-card-number').value);
    cardWrapperUl.innerHTML = '';
    
    for (let i=0; i<cardNumber; i++) {
        let obj = makeCard();
        cardWrapperUl.append(obj.li);
    }
});

cardWrapperUl.addEventListener('click', (e)=>{
    // 1. card back events
    console.log(e.target)
    // 2. card front events
});
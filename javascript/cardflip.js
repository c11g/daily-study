const cardWrapperUl = document.querySelector('.card-wrapper'),
    newGameButton = document.querySelector('.button-new');

let cardNumber = parseInt(document.querySelector('.button-card-number').value),
    cardModel = [];

// li.card-list 만들기 ( view )
function makeCardView() {
    const li = document.createElement('li'),
        cardButton = document.createElement('button'),
        inner = document.createElement('div'),
        cardBack = document.createElement('div'),
        cardFront = document.createElement('div');

    li.className = 'card-list';
    cardButton.className = 'card-button';
    inner.className = 'card-inner';
    cardBack.className = 'card card-back';
    cardFront.className = 'card card-front';
    inner.append(cardBack, cardFront);
    cardButton.appendChild(inner)
    li.appendChild(cardButton)
    
    return {li: li, cardButton: cardButton};
}

// 새 게임 시작 이벤트
newGameButton.addEventListener('click', ()=>{
    cardNumber = parseInt(document.querySelector('.button-card-number').value);
    cardWrapperUl.innerHTML = '';
    
    for (let i=0; i<cardNumber; i++) {
        let obj = makeCardView();
        cardWrapperUl.append(obj.li);
        // make card data ( model )
        cardModel.push(obj.cardButton)
        obj.cardButton.addEventListener('click', cb);
    }
});

function cb(e){
    let thisCard = e.currentTarget;
    thisCard.classList.toggle('is-fliped');
}

/* TODO - 카드에 색 담기
1. 무작위로 컬러 뽑기 함수 구현
    1.1 가능하면 너무 밝거나 어두운 컬러가 나오지 않도록 범위 지정

2. cardColor 배열에 컬러 담기
    2.1 카드 갯수가 n개 일때 -> n/2 개 컬러 필요
    2.2 컬러당 2번씩 배열에 담기

3. cardColor 배열 섞기(피셔 예이츠)

4. model에 적용하기
    4.1 data-color에 적용

5. view에 적용하기
    5.1 card-front background style에 적용
*/
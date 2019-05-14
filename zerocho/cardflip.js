const cardWrapperUl = document.querySelector(".card-wrapper"),
    newGameButton = document.querySelector(".button-new");

let cardPair, cardModelArr, cardNumberArr;

function init() {
    cardPair = parseInt(document.querySelector(".button-card-count").value);
    cardModelArr = [];
    cardNumberArr = ["ac", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "jc", "qc", "kc"];
}

// 게임 준비: view
function renderCard() {
    const li = document.createElement("li"),
        cardButton = document.createElement("button"),
        inner = document.createElement("div"),
        cardBack = document.createElement("div"),
        cardFront = document.createElement("div");

    li.className = "card-list";
    cardButton.className = "card-button";
    inner.className = "card-inner";
    cardBack.className = "card card-back";
    cardFront.className = "card card-front";
    inner.append(cardBack, cardFront);
    cardButton.appendChild(inner);
    li.appendChild(cardButton);

    return { cardLi: li, cardButton: cardButton };
}

// 카드 숫자 섞기(카드 몇 쌍, 후보 배열)
function shuffleCardArr(count, arr) {
    let pickArr = [],
        shuffleArr = [];

    let i = 0;
    while (i < count) {
        pickArr = pickArr.concat(
            arr.splice(Math.floor(Math.random() * (13 - i)), 1)
        );
        i++;
    }

    pickArr = pickArr.concat(pickArr);

    while (pickArr.length > 0) {
        shuffleArr = shuffleArr.concat(
            pickArr.splice(Math.floor(Math.random() * pickArr.length), 1)
        );
    }

    return shuffleArr;
}

// 새 게임 시작 이벤트
newGameButton.addEventListener("click", () => {
    init();
    cardWrapperUl.innerHTML = "";

    for (let i = 0; i < cardPair * 2; i++) {
        let { cardLi, cardButton } = renderCard();
        cardWrapperUl.append(cardLi);

        // cardModelArr 준비
        cardModelArr.push(cardButton);
        cardButton.addEventListener("click", cardClickHandler);
    }

    // apply card number classes
    const shuffleArr = shuffleCardArr(cardPair, cardNumberArr);
    cardModelArr.forEach((item, i) => {
        item.querySelector('.card-front').classList.add(`card-number-${shuffleArr[i]}`);
    });
});

// cardClickHandler
function cardClickHandler(e) {
    let thisCard = e.currentTarget;
    thisCard.classList.toggle("is-fliped");
}

/* TODO - 카드
[v] 1. 포커(clova) 카드 이미지 준비하기
[v] 2. 이미지에 맞는 클래스 세팅하기
    [v] 2.1 클래스 이름: card-number-ac, 2c ~ kc
    [v] 2.2 이미지 클래스 후보 배열 준비하기(길이 13)
[v] 3. 카드 갯수 n개일 때
    [v] 3.1 사용할 이미지 클래스 n개 랜덤 선택한 후 2개씩 준비
    [v] 3.2 이미지 클래스 셔플 배열 만들기
[v] 4. 카드모델(cardModelArr)에 클래스 입히기

---
1. 카드 갯수 2~13 사이만 입력 받기
2. 처음 몇 초 동안 앞면 보여주기
    2.1 카드 갯수에 따라 달리 설정
*/

const cardWrapperUl = document.querySelector(".card-wrapper"),
	readyGameButton = document.querySelector(".button-ready"),
	startGameButton = document.querySelector(".button-start"),
	pairInput = document.querySelector(".button-card-count"),
	textP = document.querySelector('.text');

let cardPair, cardModelArr, cardNumberArr,
	onePair = [],
	flipedCards = [],
	showTime = 2000;

// 게임 초기화
function init() {
	cardPair = parseInt(pairInput.value);
	if (cardPair < 2) {
		cardPair = 2;
		pairInput.value = 2;
	} else if (cardPair > 13) {
		cardPair = 13;
		pairInput.value = 13;
	}
	cardModelArr = [];
	flipedCards = [];
	cardNumberArr = ["ac", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "jc", "qc", "kc"];
	cardWrapperUl.innerHTML = "";
}

// 카드 element
function makeCard() {
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

function renderCards() {
	for (let i = 0; i < cardPair * 2; i++) {
		let { cardLi, cardButton } = makeCard();
		cardWrapperUl.append(cardLi);

		// cardModelArr 준비
		cardModelArr.push(cardButton);
	}

	// apply card number classes
	const shuffleArr = shuffleCardArr(cardPair, cardNumberArr);
	cardModelArr.forEach((item, i) => {
		item.cardValue = shuffleArr[i];
		item.querySelector('.card-front').classList.add(`card-number-${shuffleArr[i]}`);
	});
}

// 게임 준비
readyGameButton.addEventListener('click', () => {
	init();
	renderCards();
});

// 게임 시작
startGameButton.addEventListener('click', () => {
	if (!cardModelArr) return;
	cardWrapperUl.classList.add('is-show-all');
	setTimeout(function () {
		cardWrapperUl.classList.remove('is-show-all');
		cardModelArr.forEach(card => card.addEventListener("click", cardClickHandler));
	}, showTime);
});

// cardClickHandler
function cardClickHandler(e) {
	let currentCard = e.currentTarget;

	if ( currentCard.classList.contains('is-fliped') || (onePair.length === 2) ) return;
	currentCard.classList.add("is-fliped");
	
	onePair.push(currentCard);
	
	if ( onePair.length === 2 ) {
		if ( onePair[0].cardValue === onePair[1].cardValue ) {
			flipedCards.push(...onePair);

			if (flipedCards.length === cardModelArr.length) {
				setTimeout(_ => {
					alert('Success!');
				}, 600);
			} else {
				onePair = [];
			}
			return;
		} else {
			setTimeout(()=>{
					onePair.forEach(card => card.classList.remove('is-fliped'));
					onePair = [];
			}, 1000);
		}
	}
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
[v] 5. 카드 갯수 2~13 사이만 입력 받기
[v] 6. 처음 몇 초 동안 앞면 보여주기
--
[v] 7. 연속해서 2개의 클릭한 카드 정보를 저장
    [v] 7.1 2개의 카드가 같으면 계속 오픈된 상태 유지
    [v] 7.2 2개의 카드가 다르면 다시 뒤집음
[v] 8. 모든 카드가 다 오픈되면 게임 종료
-- 개선사항 --
[v] 1. 마지막 카드 뒤집어지기 전에 게임 종료 얼럿 뜸
[v] 2. 카드 뒤집히는 동안 다시 카드 클릭못하게..
[ ] 3. class 구조로 변경
*/

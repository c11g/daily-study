// 0. 필요 요소를 저장한다.
//     - var resultEelement = .result;
//     - var bonusEelement = .bonus;
const resultEelement = document.querySelector('.result');
const bonusEelement = document.querySelector('.bonus');

// 1. 숫자 45개가 담긴 배열과 당첨번호배열을 준비한다.
//     - var 모든로또번호 = [1, ..., 45];
//     - var 당첨번호배열 = [];
let allLottoNumsArr = [];
let pickedLottoNumsArr = [];
let bonusNum = '';

for (let i = 1; i < 45 + 1; i++) {
	allLottoNumsArr.push(i);
}

// 2. 난수를 1개를 추출하여 당첨번호배열에 담는다(결과)
//     - var 당첨번호 = Math.floor(Math.random() * 모든로또번호.length;
//     - 당첨번호배열.push(당첨번호);
// 2. 로직 수정) 당첨번호는 인덱스 번호이므로, 해당 인덱스의 컨텐츠를 당첨번호배열에 넣어야한다.
//     - 당첨번호배열.push(당첨번호배열[당첨번호]));

// 3. 모든로또번호배열에서 뽑힌 값을 제거한다.
//     - 모든로또번호.제거(당첨번호)

// 4. 2-3번 반복 7번. (보너스포함)
//     for문으로 7번 만큼 반복

// 4. 추가 로직) for문 마지막은 보너스번호를 따로 뺀다.
for (let i = 0; i < 7; i++) {
	var randomNum = Math.floor(Math.random() * allLottoNumsArr.length);
	if (i < 6) {
		pickedLottoNumsArr.push(allLottoNumsArr[randomNum]);
	} else {
		bonusNum = allLottoNumsArr[randomNum];
	}
	allLottoNumsArr.splice(randomNum, 1);
}

// 추가 로직) 당첨번호배열을 소팅한다. (낮은수부터 오름차순.)
pickedLottoNumsArr.sort(function (nextItem, prevItem) {
	return nextItem - prevItem;
});


// 5. 당첨번호배열을 가지고 result에 담길 볼 html를 for문으로 공 5개를 만들어 넣는다. 이 때 10의자리 수를 체크하여 data-level를 넣는다.
//     - var resultHtml = '<div class="ball" data-level=" Math.floor(당첨번호배열[i]/10)">당첨번호배열[i]<div>' 를  
//         당첨번호배열[i]돌며 만들어 계속 추가한다. (당첨번호배열.length 만큼 반복).
//     - resultEelement에 resultHtml을 넣는다.

// 6. 보너스에 html화 시켜 넣는다.
//     당첨번호배열 의 맨 마지막을 가지고 공을 만들어 넣는다. 이 때 10의자리 수를 체크하여 data-level를 넣는다.
//     - var bonustHtml을 = '<div class="ball" data-level=" Math.floor(당첨번호배열[i]/10)">당첨번호배열[i]<div>'
//     - bonusEelement bonustHtml을 넣는다.

// 수정 로직) html만들때 for문으로 하지말고 만들자마자 html에 찍는다. 셋인터벌을 이용.
let resultHtml = '';
let bonusHtml = '<div class="ball" data-level="' + (Math.ceil(bonusNum / 10)) + '">' + bonusNum + '</div>';
let count = pickedLottoNumsArr.length + 1;
let index = -1;

let clearID = setInterval(function () {
	count = count - 1;
	index = index + 1;
	if (count > 0) {
		resultEelement.innerHTML += '<div class="ball" data-level="' + Math.ceil(pickedLottoNumsArr[index] / 10) + '">' + pickedLottoNumsArr[index] + '</div>';
	} else {
		bonusEelement.innerHTML = bonusHtml;
		clearInterval(clearID);
	}
}, 1000);
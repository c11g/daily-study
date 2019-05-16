let lottoNumber = [],
   candidateLottoNumber = [],
   randomNumber,
   bonusNumber,
   bonus = document.querySelector('.bonus'),
   result = document.querySelector('.result');

for (let i = 1; i < 46; i++) {
   candidateLottoNumber.push(i);
}

while (lottoNumber.length < 7) {
   randomNumber = Math.floor(Math.random() * candidateLottoNumber.length); // 난수
   lottoNumber = lottoNumber.concat(candidateLottoNumber.splice(randomNumber, 1)); // 로또 번호 배열
}
bonusNumber = lottoNumber.pop();
lottoNumber.sort((a, b) => a - b);


let clearID = setInterval(printLotto, 1000);
window.setTimeout(function() {
   bonus.innerHTML = '<span class="ball" data-level="' + Math.ceil(bonusNumber / 10) + '">' + bonusNumber + '</span>' + ' ';
}, 7000);

function printLotto () {
   if (lottoNumber.length) {
       firstLottoNumber = lottoNumber.shift();
       return result.innerHTML += '<span class="ball" data-level="' + Math.ceil(firstLottoNumber / 10) + '">' + firstLottoNumber + '</span>' + ' ';
   } else {
       clearInterval(clearID);
   }
}
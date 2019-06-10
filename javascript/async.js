// Sync
// function f1() {
// 	console.log('f1');
// 	f2();
// }

// function f2() {
// 	console.log('f2');
// 	f3();
// }

// function f3() {
// 	console.log('f3');
// }

// f1(); // f1 - f2 - f3

// Async
function f1() {
	console.log('f1');
	f2();
}

function f2() {
	setTimeout(function(){ // setTimout(setInteval)가 비동기 함수이기 때문
		console.log('f2');
	}, 0)
	f3();
}

function f3() {
	console.log('f3');
}

f1(); // f1 - f3 - f2
// call stack: f1 -> f2 -> ( setTimout, 비동기로 대기시간만큼 기다리다 Event Que로 빠진다. ) -> f3 -> ( call stack이 비워지면 그때 Event Que에서 call stack으로 이동해서 실행된다.)
function random() {
    return Math.ceil(Math.random()*9);
}

const body = document.body;

let questionDiv = document.createElement('div'),
    form = document.createElement('form'),
    input = document.createElement('input'),
    button = document.createElement('button'),
    resultDiv = document.createElement('div'),
    num1 = random(),
    num2 = random();

questionDiv.textContent = `${num1} x ${num2} = `;
body.append(questionDiv);

body.append(form);

input.type = `number`;
form.append(input);
input.focus();

button.textContent = `입력`;
form.append(button);

body.append(resultDiv);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if ( Number(input.value) === num1 * num2 ) {
        resultDiv.textContent = `정답!`;
        num1 = random();
        num2 = random();
        questionDiv.textContent = `${num1} x ${num2} = `;
    } else {
        resultDiv.textContent = `땡!`;
    }
    input.value = '';
    input.focus();
});
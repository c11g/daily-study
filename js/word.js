const body = document.body;

let wordDiv = document.createElement('div'),
    form = document.createElement('form'),
    input = document.createElement('input'),
    button = document.createElement('button'),
    resultDiv = document.createElement('div');

wordDiv.textContent = `조영광`;
body.append(wordDiv);

body.append(form);

input.type = `text`;
form.append(input);

button.textContent = `입력`;
form.append(button);

body.append(resultDiv);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if ( wordDiv.textContent[wordDiv.textContent.length-1] === input.value[0] ) {
        wordDiv.textContent = input.value;
        resultDiv.textContent = `정답!`;
    } else {
        resultDiv.textContent = `땡!`;
    }
    input.value = '';
    input.focus();
});
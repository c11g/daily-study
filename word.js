// 1. 제시어 선언
let word = "조영광";

while ( true ) {
    // 2. 대답(단어) 
    let answer = prompt("끝말잇기", word);
    // 3. 조건문
    // 제시어 끝과 대답 단어 첫 글자가 같은가?
    if ( word[word.length-1] === answer[0] ) {
        // Y -> 1
        word = answer;
        console.log(`딩동댕`);
    } else {
        // N -> 2
        console.log(`다시 답해주세요`);
    }
}
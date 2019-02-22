// *
// **
// ***
// ****
// *****
for (let star=0;star<5;star++) {
    console.log(`*`.repeat(star+1));
}

// *****
// ****
// ***
// **
// *
for (let star=5;star>0;star--) {
    console.log(`*`.repeat(star));
}

//     *
//    **
//   ***
//  ****
// *****
for (let star=0;star<5;star++) {
    console.log(` `.repeat(4-star)+`*`.repeat(star+1));
}

// *****
//  ****
//   ***
//    **
//     *
for (let star=5;star>0;star--) {
    console.log(` `.repeat(5-star)+`*`.repeat(star));
}

//    *
//   ***
//  *****
// *******
for (let star=0;star<7;star+=2) {
    console.log(` `.repeat((7-(star+1))/2)+`*`.repeat(star+1));
}

// *******
//  *****
//   ***
//    *
for (let star=7;star>0;star-=2) {
    console.log(` `.repeat((7-star)/2)+`*`.repeat(star));
}

//   *
//  ***
// *****
//  ***
//   *
for (let star=0,i=0;star<10;star+=2) {
    i = Math.abs((5-(star+1))/2);
    console.log(` `.repeat(i)+`*`.repeat(5-i*2));
}
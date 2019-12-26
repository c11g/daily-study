setImmediate(_ => console.log('setImmediate callback'));
setTimeout(_ => console.log('setTimout callback'), 0);
Promise.resolve().then(_ => console.log('promise callback'));
process.nextTick(_ => console.log('process.nextTick callback'));

let i = 0;
setInterval(_ => {
    console.log(i);
    if ( i === 5 ) {
        console.log('End');
        process.exit();
    }
    i++;
}, 1000);
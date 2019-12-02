let count = 10,
    price = 0.25,
    message = passthru`${count} items const $${(count * price).toFixed(2)}`;

function passthru(...args) {
    console.log(args);
    return 'return value'
}

passthru('Hi');
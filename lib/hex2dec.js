'use strict';
const hexValues = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'a': 10, 
    'b': 11,
    'c': 12, 
    'd': 13, 
    'e': 14,
    'f': 15,
};

function hex2dec(hex) {
    const checkRegExp = /[0-9a-f]/;
    
    if (!hex || !checkRegExp.test(hex)) 
        throw Error('hex invalid!');
    
    const {length} = hex;
    let decimal = 0;
    const number = hex
            .toLowerCase()
            .split('')
            .reverse();

    for (let i = 0; i < length; i++) {
        const num = number[i];
        const newNum = hexValues[num];

        decimal = newNum * 16**i;
    }

    return decimal;
}

module.exports = hex2dec;
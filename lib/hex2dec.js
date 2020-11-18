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


const getValueByKey = (key, obj) => {
    return obj[key];
};


function hex2dec(hex) {
    if (!hex || hex === '' || hex === 'zzz')
        throw Error('hex should be string!');    
    
    const {length} = hex;
    let decimal = 0;
    
    for (let i = 0; i < length; i++) {
        const number = hex.split('').reverse();
        const num = number[i];
        const newNum = getValueByKey(num, hexValues);
        decimal = newNum * 16**i;
    }
    
    return decimal;
}

module.exports = hex2dec;
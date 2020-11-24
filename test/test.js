'use strict';

const test = require('tape');
const tryCatch = require('try-catch');
const hex2dec = require('..');

test('hex2dec: valid hex',(t) => {
    const actual = hex2dec('abc');
    const expect = 2560;

    t.deepEqual(actual, expect);
    t.end();
})

test('hex2dec: empty arguments', (t) => {
    const [error] = tryCatch(hex2dec);

    t.equal(error.message, 'hex invalid!');
    t.end();
});

test('hex2dec: bad arguments', (t) => {
    const [error] = tryCatch(hex2dec, 'Kln');

    t.equal(error.message, 'hex invalid!');
    t.end();
});


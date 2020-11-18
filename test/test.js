'use strict';

const test = require('tape');
const hex2dec = require('..');

test('hex2dec: valid hex',(t) => {
    const actual = hex2dec('abc');
    const expect = 2560;

    t.deepEqual(actual, expect);
    t.end();
})


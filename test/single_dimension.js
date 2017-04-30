'use strict';
const peekdepth = require('../');
const assert = require('assert');

let someArray;
let depth;

someArray = [1, 2, 3];
depth = peekdepth(someArray);
assert.equal(1, depth, `depth should be 1 not ${depth}`);

'use strict';
const peekdepth = require('../');
const assert = require('assert');

let someArray;
let depth;

someArray = [[[]], [[]]];
depth = peekdepth(someArray);
assert.equal(3, depth, `depth should be 3 not ${depth}`);

someArray = [1, [2, [3, [[5], 4]]], 1, [2, [3, [[5], 4]]]];
depth = peekdepth(someArray);
assert.equal(5, depth, `depth should be 5 not ${depth}`);

someArray = [[1, [2], 3], [1, [2], 3]];
depth = peekdepth(someArray);
assert.equal(3, depth, `depth should be 3 not ${depth}`);

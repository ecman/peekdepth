'use strict';
const peekdepth = require('../');
const assert = require('assert');

let nonArray;
let depth;

nonArray = null;
depth = peekdepth(nonArray);
assert.equal(0, depth, `depth should be 0 not ${depth}`);

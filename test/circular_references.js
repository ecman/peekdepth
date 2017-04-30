'use strict';
const peekdepth = require('../');
const assert = require('assert');

let depth = 0;
let parentArray = ["parent"];
let childArray = ["child", parentArray];
let grandchildArray = ["grandchild", childArray, parentArray]

childArray.push(grandchildArray); 
parentArray.push(childArray);

assert.doesNotThrow(function() {
  depth = peekdepth(grandchildArray);
}, RangeError, 'Circular array references should not cause errors');

assert.equal(3, depth, `depth should be 3 not ${depth}`);

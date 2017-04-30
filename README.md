# peekdepth

Get the depth of an array

# Usage

```js
const peekdepth = require('peekdepth');

let parentArray = ["parent"];
let childArray = ["child", parentArray];
let grandchildArray = ["grandchild", childArray, parentArray]

childArray.push(grandchildArray); 
parentArray.push(childArray);

console.log('grandchildArray:', grandchildArray);
console.log('depth:', peekdepth(grandchildArray));
```

Output:

```text
grandchildArray: [ 'grandchild',
  [ 'child', [ 'parent', [Circular] ], [Circular] ],
  [ 'parent', [ 'child', [Circular], [Circular] ] ] ]
depth: 3
```

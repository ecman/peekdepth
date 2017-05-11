'use strict';
module.exports = peekdepth;

function peekdepth(arry, seen) {
  seen = seen || new WeakSet();
  if (!(arry instanceof Array) ||
      seen.has(arry)) {
    return 0;
  }
  seen.add(arry);
  let i = 0;
  let depth = 0;
  while (i < arry.length) {
    depth = Math.max(depth, peekdepth(arry[i], seen));
    i += 1;
  }
  return 1 + depth;
}

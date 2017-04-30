'use strict';
const fs = require('fs');
const path = require('path');
const testfiles = fs.readdirSync('./test');

for (let filename of testfiles) {
  if (path.extname(filename) !== '.js' ||
      path.basename(__filename) === filename)
    continue;

  require(`./${filename}`);
  console.log(filename, 'OK');
}

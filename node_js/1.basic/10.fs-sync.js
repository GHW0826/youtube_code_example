const { readFileSync, writeFileSync } = require('fs');
const fs = require('fs');

// console.log(fs);
// console.log(readFileSync);
// console.log(typeof fs);
// console.log(typeof readFileSync);
console.log('starting');

const first = readFileSync('./example/first.txt', 'utf8');
const second = readFileSync('./example/second.txt', 'utf8');

console.log(first, second);

// do repeat override (flag:'a' append)
writeFileSync('./example/result.txt', `Result txt ${first} + ${second} !`,
{flag:'a'}
);

console.log('done task');
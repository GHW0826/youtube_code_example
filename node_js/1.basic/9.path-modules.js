const path = require('path');

console.log(path.sep);

// just join, can execute no exist path
const filePath = path.join('/example', 'test.txt');
const filePath2 = path.join('/example', 'tst', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
const base2 = path.basename(filePath2);
console.log(base);
console.log(base2);

const abs = path.resolve(__dirname, 'example', 'test.txt');
console.log(abs);

// difference
path.join('/a', '/b')       // Outputs '/a/b'
path.resolve('/a', '/b')    // Outputs '/b'
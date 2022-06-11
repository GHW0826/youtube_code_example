// CommonJS, every file is module (by default)
// Modules  - Encapsulated Code (only share minumum)
const names = require('./4.name');
const Greating = require('./5.utils');
const data = require('./6.alternative-flavor');
require('./7.mind-grenade')

console.log(typeof require('./7.mind-grenade'));
console.log(typeof names);
console.log(typeof Greating);
console.log(typeof data);

console.log(data);
console.log(names);

Greating('test');
Greating(names.john);
Greating(names.peter);
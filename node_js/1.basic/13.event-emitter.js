const EventEmitter = require('events');
const customEmitter = new EventEmitter();


customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} id ${id}`);
});

customEmitter.on('response', () => {
    console.log(`data recieved2 `);
});

// function declare order important
customEmitter.emit('response');
console.log();
customEmitter.emit('response', 'test', 20);
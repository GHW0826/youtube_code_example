const { readFile, writeFile, write } = require('fs');

console.log('starting');

// result is buffer (utf8 incoding) option check
readFile('./example/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./example/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./example/result-sync.txt', `result : ${first}, ${second}`
        , (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(result);
        });
    });
});

console.log('done task');
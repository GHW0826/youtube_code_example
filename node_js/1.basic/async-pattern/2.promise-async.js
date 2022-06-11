const { readFile, writeFile } = require('fs');
// const { readFile, writeFile } = require('fs').promises;
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result)=> {
            if (err) {
                reject(err);
                return;
            }
            console.log("promise");
            resolve(result);
        });
    })
};

readFile('./example/first.txt', 'utf8', (err, result)=> {
    if (err)
        return;
    console.log("base");
    console.log(result);
});

console.log("second");
getText('./example/first.txt')
.then(result => console.log(result))
.catch(err => console.log(err));


console.log('thrid');
const start = async() => {
    try {
        console.log("before");
        const first = await getText('./example/first.txt');
        const second = await getText('./example/second.txt');
        console.log("in async");
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
};

const start_promise= async() => {
    try {
        console.log("start_promise before");
        const first = await readFilePromise('./example/first.txt', 'utf8');
        const second = await readFilePromise('./example/second.txt', 'utf8');
        await writeFilePromise('./example/result-promise.txt', 
        `Promise : ${first} ${second}`);
        console.log("start_promise in async");
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
};

start();
console.log('===========');
start_promise();
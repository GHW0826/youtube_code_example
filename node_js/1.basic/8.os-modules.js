const os = require('os');

// console.log(os);
// console.log(typeof os);

// info about current user
const user = os.userInfo();
console.log(user);


// method returns the system uptime in seconds
console.log(`The Sys Uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release : os.release(),
    totalMem : os.totalmem() / 1024 / 1024 / 1024,  // GB
    freeMem : os.freemem() / 1024 / 1024 / 1024
}

console.log(currentOS);
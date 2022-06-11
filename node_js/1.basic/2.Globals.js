// GLOBALS - No Window

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

console.log(`dirname : ${__dirname}`);
console.log(`filename : ${__filename}`);


console.log('@@@@@@@@@@@@@@ require info @@@@@@@@@@@@@@');
console.log(require);

console.log('@@@@@@@@@@@@@@ module info @@@@@@@@@@@@@@');
console.log(module);

console.log('@@@@@@@@@@@@@@ process info @@@@@@@@@@@@@@');
console.log(process);

let args = process.argv;
for(let i=0; i < args.length; ++i){
  console.log(`${i} : ${args[i]}`);
}

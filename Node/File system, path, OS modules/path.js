const os = require('os');
const fs =require('fs')
fs.writeFileSync('demo.txt','hello node.js i am shiv bro');
fs.appendFileSync('demo.txt','\nNew line added')
console.log(os.type());         // Windows / Linux
console.log(os.platform());     // win32 / linux etc.
console.log(os.freemem());      // Free memory
console.log(os.totalmem());     // Total memory
console.log(os.homedir());      // Home directory

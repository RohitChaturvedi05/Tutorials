
var fs = require("fs");

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

process.stdin.resume();
process.stdin.setEncoding('utf8');


process.stdin.on('data', function (chunk) {
  writerStream.write(chunk, 'UTF8');
});


console.log("\nNode is running as process #" + process.pid);

// process.stdin.pipe(writerStream);
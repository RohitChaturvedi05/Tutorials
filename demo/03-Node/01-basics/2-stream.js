process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('Data! -> ' + chunk);
});

process.stdin.on('error', function () {
  process.stderr.write('Error !\n');
});

console.log("Node is running as process #" + process.pid);
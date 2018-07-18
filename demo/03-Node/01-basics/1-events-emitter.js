var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
    console.log('listner1 executed.');
}


console.log("\n");
// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner1);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");


setTimeout(() => {
    console.log("\n");
    // Fire the connection event 
    eventEmitter.emit('connection');

    // Remove the binding of listner1 function
    eventEmitter.removeListener('connection', listner1);

    eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

    console.log(eventListeners + " Listner(s) listening to connection event");
    console.log("\n");

}, 2000);


console.log("Program Ended.");
console.log("-----------------------------------------");
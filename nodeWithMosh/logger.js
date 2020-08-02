const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{ //Logger class will now have all the functionality that is defined in EventEmitter
    //classes should be capitalized
    log(message) { //no longer needs function key word because it is inside of a class. it is known as a method
        //send an HTTP request
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://'});
    }
}

module.exports = Logger;

//if you want to raise events in your application to signal something happened you must create a class that extends EventEmitter which will have all the funcationality defined in EventEmitter but you can also add additional functionality  
//so all methods defined in EventEmitter will also be in Logger class. 
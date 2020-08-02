const EventEmitter = require('events');

const Logger = require('./logger') //calling the function and setting the path to logger module
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => { //also function(arg)
    console.log('Listener called', arg);
});

logger.log('message'); //calling the log function with a message

//instead of using an instance of EE you will use an instance of a custom class you have defined that extends event emitter 
//var events = require('events'); //when calling a call module we just need the name
// //whatever is returned will be stored in the events variable
// //event emitter to create custom events and react to those events when omitted

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){ //when someevent occurs then we want the call back function to omit 
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted'); //the str is the mssg in the function in line 7

//another ex
var events = require('events');
var util = require('util'); //util inherits the eventEmitter i think

var Person = function (name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter); //person will inherit events.EventEmitter

var chelsea = new Person('chelsea');
var patrick = new Person('patrick');
var ryu = new Person('ryu');
var people = [chelsea, patrick, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){ //were taking whichever person and attaching an event listener, we've inherited the eventemitted onto any object which is created through this construtor "new Person"
    //attaching a custom event to each person as we go thru the array
        console.log(person.name + ' said: ' + mssg);
    });
});

chelsea.emit('speak', 'yerrrr wasssgood');
patrick.emit('speak', 'i want ramen');
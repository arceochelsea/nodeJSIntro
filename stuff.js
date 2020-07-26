var counter = function (arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b) {
    return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

module.exports.counter = counter; //counter property of the exports object is equal to the counter function
module.exports.adder = adder;
module.exports.pi = pi;

//another way to export this stuff to the mod
module.exports.counter = function (arr){
    return 'There are ' + arr.length + ' elements in this array';
};

module.exports.adder = function(a,b) {
    return `The sum of the 2 numbers is ${a+b}`;
};

module.exports.pi = 3.142;


//another way to add properties to the exports
var counter = function (arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b) {
    return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};
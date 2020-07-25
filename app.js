//using this functionality in another app (from count)

var counter = require('./count'); // ./ to say we want a file in a current dir
//no need to write js in the end because it will find that js file

//now we've required this module 'count' in app.js

console.log(counter(['chelsea', 'margie', 'will']));

//error at first because counter method isnt avail outside of count module 

//when we require another mod it looks in that mod to in the mod.exports property finds it and returns it in the file that its required in and stores it in a variable.

//variable is then a reference to the function in the mod and it should work in the function in line 7.
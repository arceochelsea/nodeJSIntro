//Streams

// - writable streams - allow node js to write data to a stream
// - readable streams - allow node js to read data from a stream
// - duplex - can read and write to a stream 

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe2.txt', 'utf8'); //this will create a readable stream, where we can read data from
//now were gonna create a read stream. its gonna find readMe data, fill the buffer then pass the data in chunks, to myReadStream variable.

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
});

//were reading data in chunks via stream and every time data is received were doing something with that 

//benefit of splitting up data in small pieces is that every time you get a small piece of data you can send it to the user using a writable stream so you can pass it to the client a little bit at a time instead of waiting for the entire thing to be read. 

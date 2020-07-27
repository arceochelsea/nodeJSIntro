var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe2.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe2.txt');

myReadStream.on('data', function(chunk){ //everytime we receive a chunk of data, it fires this function and we reieve that chunk of data and then we can now write that chunk of data to the right stream and send it to this new location 
    console.log('new chunk received:');
    myWriteStream.write(chunk);
});

//reading line 4 by creating a read stream, everytime we recieve a chunk of data were firing this function and we get that chunk of data and log it to the console then were saying the write stream, i want you to go ahead and write to it and the data is the chunk of data that was just receieved. 
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    var myReadStream = fs.createReadStream(__dirname + '/readMe2.txt', 'utf8');
myReadStream.pipe(res)//only use this method pipe on readable streams, cant pipe from a writable stream. does the same exact thing as APP 15. sends data down the stream to the client 
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');

//RECAP
//created a server, got a req obj and res obj and res is writable stream.
//console.log mssg, res headers, content type is text/plain
//then creating a readable stream using the fs module that reads the contents of that file. and we specified that its utf-8 character encoding so were getting it back in characters we expect
//then we've taken the read stream and piped it in the res stream and its listening to the data event and streaming the data bit by bit to receive it quicker 
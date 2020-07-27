var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'}); //changing from plain text to html for the computer knows how to render it properly
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res)
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');

//RECAP 
//we sent an html file instead of plaintext, supplied the path to the file and sent it to the browser 
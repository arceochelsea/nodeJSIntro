var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/JSON'}); //this was changed to take JSON 
    var myObj = {
        name: 'Tsunade',
        job: 'Lady Hokage',
        age: 'unknown'
    };
    res.end(JSON.stringify(myObj)); //expects either string or buffer which is why we must stringify it with JSON
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
//Creating a server

var http = require('http');

var server = http.createServer(function(req, res){ //whenever we send a request to the server, then this function is gonna fire. in this func there are two parameters: request object comes loaded with details about the request that has been made. request object is something we can use to send a response back to the client.
    console.log('request was made: ' + req.url); //this is property we can access on the request object (url)
    res.writeHead(200, {'Content-Type': 'text/plain'}); //response header, first para status, then an object, then value of the content type. this is how browser knows what to do with content
    //you can also see this info on the browser! inspect, network, header
    res.end('Hey girl heeey!'); //end method and said back the 'plain text'
});

server.listen(3000, '127.0.0.1'); //NodeJS listens to this specific port (3000), IP address local server 
console.log('now listening to port 3000');

//Reponse Headers

// - content-type
// - status 

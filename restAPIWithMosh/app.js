const http = require('http');

const server = http.createServer((req, res) => { //with this req obj we can check the URL of the incoming req
    if (req.url === '/') {
        res.write('Yerrrr!'); //this is how we're going to res to the client
        res.end();
    }

    if (req.url === '/api/course') { //in code block is how we will respond to the client 
        res.write(JSON.stringify([1, 2, 3])); 
        res.end();
    }
});

server.listen(3000);

console.log('Listening to Year 3000~');
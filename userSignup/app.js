// goal: create a homepage that allows the client to make a new user. Your frontend should send a request to your server API .
// create a router for the home page, and one for user  related request
// the home router only needs to handle a GET request from the root- route aka the homepage aka http://localhost:3000/
// this router will send a static html page. This page will have a signup form taking in the following data
// username, email, and password(twice to confirm).
// when the form is submitted a request should be made to your server ip address at the endpoint /user/post/new
// when the server recieves the data is should check it to make sure the data was entered correctly, and send an appropriate response.
// This data does not need to be stored anywhere, just sent back to the client.

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'}); //changing from plain text to html for the computer knows how to render it properly
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res)
// });

// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');

//PACKAGES
const express = require('express');
const mongoose = require('mongoose');

//MIDDLES

//ROUTERS
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userrouter');

//CONSTANTS
const port = 3000;

//MAIN APP VAR
const app = express();

//MIDDLEWARES/ROUTERS IN USE

app.use(express.json()); //parse the body from a json format to a js object that is workable in js

//MIDDLEWARE THAT ALL ROUTES USE (regardless of request-path or HTTP method) '/' 

//USING A ROUTER
app.use('/', homeRouter); //route branches cause they branch off the main one
app.use('/user', userRouter);

//START SERVER LISTENING
app.listen(port, () => { 
    console.log(`Server is now listening on port ${port}`);
}) 


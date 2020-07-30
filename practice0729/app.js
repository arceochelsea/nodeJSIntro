const express = require('express'); //exporting the module
const mongoose = require('mongoose');

const app = express(); //firing the function which allows you to have access to different methods

const port = 3000;

app.get('/', function(req, res){ //when user goes to this address (first param), its going to fire this call back function (second param)
    res.send('default') //this will be sent to server
})

app.listen(port, function(req, res){ //creates a listener on specified port / path 
    console.log(`Server is now listening on port ${port}`); //sent to terminal
});
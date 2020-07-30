const express = require('express'); 
const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.get('/', function(req, res){
    res.send('default')
})

app.listen(port, function(req, res){
    console.log(`Server is now listening on port ${port}`);
});


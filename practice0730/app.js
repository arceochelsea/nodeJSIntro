//packages
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.get('/', function(req, res){
    res.send('homepage yo');
});

app.listen(port, function(req, res){
    console.log(`server is now listening to port ${port}`);
})


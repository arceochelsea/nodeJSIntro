const express = require('express');

const router = express.Router(); //an obj created with many instances of it

router.get('/', function(req,res){

    const filePath = process.cwd() + '/public/home.html';

    res.sendFile(filePath);

})

module.exports = router;
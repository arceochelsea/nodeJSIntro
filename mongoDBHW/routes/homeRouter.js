const express = require('express');

const router = express.Router();

//const router = router.express;

router.get('/', function (req,res){

    const filePath = process.cwd() + '/public.home.html';

    console.log(filePath);

    res.sendFile(filePath);
});

// router.get('/login', function(req,res){
    
//     const filePath = process.cwd() + '/public.login.html';

//     console.log(filePath);

//     res.sendFile(filePath);
// });

module.exports = router;
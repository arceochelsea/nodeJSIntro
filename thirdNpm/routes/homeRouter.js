//branch of app js 
//handle all home routes
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    const filePath = process.cwd() + '/public/home.html';

    console.log(filePath);

    res.sendFile(filePath);
});

router.get('/login', (req, res) => {

    const filePath = process.cwd() + '/public/login.html';

    res.sendFile(filePath);
});

module.exports = router;

// homework from 8/11, didnt connect

router.get('/', function (req, res){
 //   let jsonObj = {message: 'its the bashblinging..flackflinging..'};
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({message: 'ITS THE HASHSLINGING SLASHER!!'});
    } else {
        res.json({message: "no this is patrick"})
    }
})
//subrouter for users that'll be the post
//then create a post route
//router.post
//
const express = require('express');
const router = express.Router();

//localhost:3000/now/newUser
router.post('/newUser', (req, res) => {
    console.log({
        "email-address": "emailhereyo@gmail.com",
        "password": "password123"
    });
    res.send('blahblah') //no params 
    //req.query is built on the frontend, as is the body
    //query is for multiple things to be sent 
})

module.exports = router;
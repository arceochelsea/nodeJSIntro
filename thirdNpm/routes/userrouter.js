// //packages import
// //const express = require('express');

// //router = new express.Router();

// //alt to ^^ lines
//

const { Router } = require('express');

const router = new Router ();

const User = require('../models/User');
//const { db } = require('../models/User'); alternate syntax

const findUser = require('../middleware/findUser');
const validateReg = require('../middleware/validateRegister');
const passEncrypt = require('../middleware/passEncrypt');
const checkUserCred = require('../middleware/checkUserCred');
const createJWT = require('../middleware/createJWT');

// const userPost = require('./userPost.js');
// router.use('/post', userPost)
router.patch('/login', checkUserCred, createJWT, (req, res) => {

    console.log(req.body, 'login test');

    try {

        res.json({token: req.createJWT})

    } catch (error) {
        
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

//@path: LH/user/register
//@desp: make a new user document and stores their info to the database
//@access: public

router.post('/register', validateReg, passEncrypt, async (req, res) => {

    try {

        //req.newUser is defined n the validateReq middleware and passed to the function
        await User.create(req.newUser);

        res.status(201).json({message: 'success!'});

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
})

//@path: LH/user/all
//@desp: fetch all user data from the database, do not include sensitive info 
//@access: public

router.get('/all', async (req, res) => { 
   // db.collection('users').find()

    try {
       
        const allUsers = await User.find({}) //same as above!! await makes it async
        
        console.log(allUsers);

        res.json(allUsers) //can send objs or arrays

        } catch (err) {
            const msg = err.message || err;
            console.error(msg) //if this is undefined use the err on the right of the OR 
            res.status(500).json({
                message: msg
            })
        }
    }   
)
//@path: LH/user/username/:username
//@desp: fetch one user data from the database, do not include sensitive info 
//@access: public

router.get('/username/:username', async (req, res) => {

    try {
        //const foundUser = await User.findOne( {username: req.params.username} ) //req.body is more than one value from the client, req.params is extracting one piece of info from the client, req.query are for few pieces of info but they are optional!

        const query = {username: req.params.username};

        const projection = { email: 1, username: 1, _id: 0}; //id will be included unless specifically said not to include
        // fakeobj = { username, pass, favMovie: 1, firstName, lastName: 1}
        // fakeprojectionobj = {favMovie: 0}

        const foundUser = await User.findOne( query, projection );

        res.json(foundUser);

    } catch (err) {
        const msg = err.message || err;
        console.error(msg) //if this is undefined use the err on the right of the OR 
        res.status(500).json({
            message: msg
        })
    }
})

//put /updateinfo/:id *uses req.body to pass modifying values of user
//what do we want to update, how is that info being passed to the REST api?
//@path: LH/user/update/:id
//@desp: fetch one user data from the database, do not include sensitive info 
//@access: public

router.put('/update/:id', findUser, async (req, res) => {

    try {

        //Ninja.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(ninja){
//     res.send(ninja);
// });
    let updatedUser = await User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}) 
        res.json({updatedUser})
        
    } catch (err) {
        const msg = err.message || err;
        console.error(msg) //if this is undefined use the err on the right of the OR 
        res.status(500).json({
            message: msg
        })
    }

})


//delete /delete/:id ( mongodb document id )
router.delete('/delete/:id', findUser, async (req, res) => {

    try {

        await User.findByIdAndDelete(req.userId); 

        res.send('Deleted User!')

    } catch (err) {
        const msg = err.message || err;
        console.error(msg);
        res.status(500).json({
            message: msg
        })
    }
})

router.put('/update-email/:email', async (req, res) => {

    try {

    let updatedUser = await User.findOneAndUpdate({email: req.params.email}, req.body, {new: true}) 
        console.log(updatedUser);
        res.json({updatedUser})
        
    } catch (err) {
        const msg = err.message || err;
        console.error(msg) //if this is undefined use the err on the right of the OR 
        res.status(500).json({
            message: msg
        })
    }

})

//make viewable to other files
module.exports = router;
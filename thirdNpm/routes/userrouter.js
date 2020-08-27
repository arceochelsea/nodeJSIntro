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

// const userPost = require('./userPost.js');
// router.use('/post', userPost)
router.patch('/login', (req, res) => {

    console.log(req.body, 'login test');

    try {

        res.json({message: 'success!'})

    }catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: error.message
        })
    }
})

//@path: LH/user/register
//@desp: make a new user document and stores their info to the database
//@access: public

router.post('/register', async (req, res) => {
    console.log(req.body);

    const { email: e, username: u, password: p} = req.body; //body destructuring our target is req.body
    
    if (e === undefined || e === undefined || p === undefined) {
        return res.status(400).json({
            message: 'Fields missing needed to create account'
        })
    } //this ensure that these values EXIST 

    /*
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    */

    // const e = req.body.email;

    //     if (e === undefined) {
    //         e = 'default email'
    //     }

    // const u = req.body.username === undefined ? 'default username' : req.body.username ;

    try {

        //backend validation
        //*ensure email/username are not dups
        //check password length
        //validate email and username for constriants (before mongoose does for us)
 
/* beginning of backend validation
        const validationErrors = [];

        const emailExist = User.findOne({email: e}) !== null;//findone will indicate if there is nothing by telling you its NULL

        const usernameExist = User.findOne({username: u}) !== null;

        if (!emailExist || !usernameExist) {
            const data = [];
            if (emailExist) validationErrors.push({key: 'email', error: 'Email In Use'})
            if (usernameExist) validationErrors.push({key: 'username', error: 'Username In Use'})

            if(p.length < 7) validationErrors.push({key: 'password', error: 'Password Did Not Meet Requirements'})

            //if this array has more than 0 elems res with 400 and res with the array of errors

            // return res.status(409).json({

            //     message: 'data already in use',
            //     data: data
            // })
        }
 end of backend validation so far*/


        //if pw length is off
            //return res msg: 'pw length wrong'

        //old way (deprecated)
        // const newUserDoc = new User(req.body); //create an instance of the user model which an instance of this model is just a new document
        // await newUserDoc.save(); //saves it to database; dont move on to the next line of code the operation to the right completes

        //new way (preferred)
        
        await User.create(req.body); //line above is done in one line here

        res.json({message: 'success!'})

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
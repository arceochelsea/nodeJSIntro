// //packages import
// //const express = require('express');

// //router = new express.Router();

// //alt

// const { Router } = require('express');

// const router = new Router();

// //const userSubRouter = express.Router({mergeParams: true});

// const userpost = require('./userPosts')

// //we have to infer the local host part
// //would be localhost:3000/now
// router.get('/now', (req, res) => {
//     const {year: y, day: d, month: m} = req.params;
//     console.log(y, d, m)
//     let date = new Date(y,d,m);
//     res.send(date);
// })

// router.use('/post', userpost)
// //import user router for posting
// //least one route handle for a post request
// //endpoint expected is localhost:port/user/post/newUser
// //it'll accept the post method

// //create a subrouter for posting users

// module.exports = router;


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

    try {

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

router.put('/update/:id', findUser, async (req, res) => {

    try {

        //Ninja.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(ninja){
//     res.send(ninja);
// });
        await User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then((user) => {
                res.json({user})
            })
    
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

//make viewable to other files
module.exports = router;
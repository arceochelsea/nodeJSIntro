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

        /*backend validation
        []ensure email/username are not dups
        []check password length
        [] validate email and username for contriants (before mongoose does for us)
        */

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

//make viewable to other files
module.exports = router;
//packages import
//const express = require('express');

//router = new express.Router();

//alt

const { Router } = require('express');

/*
@path / localhost:port/user/now/:day/:month?parm1={Boolean}
@desc /
@access public
*/

const router = new Router();

//const userSubRouter = express.Router({mergeParams: true});

const userpost = require('./userPosts')

//we have to infer the local host part
//would be localhost:3000/now
router.get('/now', (req, res) => {
    const {year: y, day: d, month: m} = req.params;
    console.log(y, d, m)
    let date = new Date(y,d,m);
    res.send(date);
})

router.use('/post', userpost)
//import user router for posting
//least one route handle for a post request
//endpoint expected is localhost:port/user/post/newUser
//it'll accept the post method

//create a subrouter for posting users

module.exports = router;


//

// const { Router } = require('express');

// const router = new Router ();

// const userPost = require('./userPost.js');

// router.use('/post', userPost)

// router.patch('/login', (req, res) => {
//     console.log(req.body);

//     try {

//         res.json({message: 'success!'})

//     }catch (error) {
//         console.error(error.message);

//         res.status(500).json({
//             message: error.message
//         })
//     }
// })

// module.exports = router;
const validator = require('validator').default;

const bcrypt = require('bcrypt'); 

const User = require('../models/User');

module.exports = async (req, res, next) => {

    try {

        const { password, credential} = req.body;

        if (password == undefined || credential == undefined) {
            return res.status(400).json({message: 'Credentials Do Not Match'})
        }
        
        const p = password.trim();
        const c = credential.trim();

        //first is the user logging in with their email or their username
        const field = validate.isEmail(c) ? 'email' : 'username';

        //if email, check if email is in use
        //if username, check username is in use
        const query = {};
        const projection = {password: 1, };
        query[field] = c;
        
        const foundUser = await User.findOne(query, projection);//returns obj with two fields or two props: pw / id

        if(foundUser == null) {
            return res.status(400).json({message: 'Credentials Do Not Match'})
        }

        //if they do exist, check the password 

        const passwordMatches = bcrypt.compare(p, foundUser.password); //returns a boolean true if pw matches

        //if pass matches, then go to the next middleware, otherwise send a general message 'failed login'

        if (!passwordMatches) {
            return res.status(400).json({message: 'Credentials Do Not Match'})
        }

        //at this point we have confirmed the user's creds match and they can be logged in

        req.userId = foundUser._id;
        

        next ()

    } catch (error){
        console.error(error.message || error)
        res.json({
            message: error.message,
            error: error
        })
    }
}
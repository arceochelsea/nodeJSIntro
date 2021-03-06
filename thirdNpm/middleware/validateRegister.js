const User = require('../models/User');

const validator = require('validator').default;

module.exports = async (req, res, next) => { //NEXT BC IT IS A MIDDDLEWARE

    try {    
        //backend validation
        //ensure email/username are not dups
        //check password length
        //validate email and username for constriants (before mongoose does for us)
    
        const validationErrors = [];

        const { email: e, username: u, password: p} = req.body; 

        //checks if the data given is empty

        if (e === undefined || e.trim().length === 0) { 
            validationErrors.push({key: 'email', error: 'Email Required'}) 
        } else if (e != undefined && !validator.isEmail(e)) { //checks that is it a valid email
                validationErrors.push({key: 'email', error: 'Must Be Valid Email Address'})
            } else {
            const emailExist = await User.findOne({email: e}) !== null; //ensure email are not dups / in db already
            if (emailExist) validationErrors.push({key: 'email', error: 'Email In Use'})
        }

        if (u === undefined || u.trim().length === 0) {
            validationErrors.push({key: 'username', error: 'Username Required'})
        } else {
            const usernameExist = await User.findOne({username: u}) !== null; //ensure username are not dups
            if (usernameExist) {validationErrors.push({key: 'username', error: 'Username In Use'})}            

        }

        if (p === undefined || p.trim().length === 0) { 
            validationErrors.push({key: 'password', error: 'Password Required'}) 
        } else if (p != undefined && p.length < 7) {//checks the length of the password
            validationErrors.push({key: 'password', error: 'Password Did Not Meet Requirements'});
        }
    
                if (validationErrors.length > 0) {
                    res.status(400).json({
                        validationErrors: validationErrors
                    })  
                } else {

                    //sanitize individual fields 

                    const username = u.trim(), email = e.trim(), password = p.trim();

                    //1) create new object, only include the fields we need (user, email, password)

                    sanitizedData = {
                        username: username,
                        email: email,
                        password: password
                    }

                    req.newUser = sanitizedData;

                    //2) remove unneeded/security risking fields

                    //its defined on our frontend form
                    // delete req.body.password2

                    // //could possibly be sent via postman
                    // delete req.body.emailValidated

                    next()
                }

            } catch (error) {
                console.log(error.stack)
                res.status(500).json({
                    message: error.message ||'Unknown Error',
                    error: error
                })
            }
        }
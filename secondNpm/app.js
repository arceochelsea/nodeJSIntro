const express = require('express'); //exporting the module
const mongoose = require('mongoose'); 

console.log(express);

const app = express(); //firing the function which allows you to have access to different methods which helps us with routing or setting up template engines

app.get('/', function(req, res){ //when user goes to this address (first param), its going to fire the function (second param)
    res.send('home page');
});
app.get('/contact', function(req, res){ //when user goes to this address (first param), its going to fire the function (second param)
    res.send('contact page');
});

app.listen(3000);




// const port = 3000;

// app.get(
//     '/',
//     (req, res) => {
//         res.send('default')
//     }
// )

// app.listen(port, () => { 
//     console.log(`Server is now listening on port ${port}`);
// }) //executes when it starts listening  
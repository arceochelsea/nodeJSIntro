const express = require('express');
const app = express();

//this is how we define a route
app.get('/', (req, res) => { //callback function also called route handler 
    res.send('WADDUP WORLD');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
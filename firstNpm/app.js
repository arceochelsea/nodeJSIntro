const express = require('express');
const mongoose = require('mongoose');

console.log(express);

const app = express();

const port = 3000;

app.get(
    '/',
    (req, res) => {
        res.send('default')
    }
)

app.listen(port, () => {
    console.log(`Server is now listening on port ${port}`);
}) //executes when it starts listening  
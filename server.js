require('dotenv').config();
const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('<h1>The server is running!</h1>');
});


app.post('weather', (req, res) => {


})




app.listen(3000, () => {
    console.log('Listening on port 6000');
});
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const ctrl = require('./controller');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

//Connect to database using connect method.
//that takes a connection string, option and a callback with the error.
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true},
    (err) => {
    if(err) console.log('Database COnnection Error-----------', err);
    console.log('Database Connection');
});

app.use(bodyParser.json());

app.get('/api/tutorials', ctrl.readTutorials);
app.post('/api/contact', ctrl.contactUser);


app.listen(PORT, () => console.log(`Listening on Port: ${PORT}!`));

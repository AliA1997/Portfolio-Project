
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creates a new Schema 
const message  = new Schema({
    name: String,
    email: String,
    subject: String,
    textBody: String
})

module.exports = mongoose.model('Message', message);
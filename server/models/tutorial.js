const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates a new schema 
const tutorial = new Schema({
    title: String,
    links: [String]
});

module.exports = mongoose.model('Tutorial', tutorial);
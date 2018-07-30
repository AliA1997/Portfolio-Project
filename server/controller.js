const mongoose = require('mongoose');
const Message = require('./models/message');
const nodemailerCtrl = require('./nodemailer_controller');
module.exports = {
    contactUser(req, res) {
        const { name, email, message, subject } = req.body;
        const newMessage = new Message({
            name,
            email,
            subject,
            textBody: message
        })
        newMessage.save((err) => {
            if(err) console.log('Mongoose Save Error----------', err);
            console.log('Data Saved!');
        });
        nodemailerCtrl.sendContactEmail(name, email, subject, message);
        res.status(200).json({message: "Message Sent!"});
    },
    adminGetEmails(req, res) {
        Message.find({}).exec((err, data) => {
            if(err) console.log('GEt Emails Error------------', err);
            res.status(200).json({emails: data});
        })
    }
}
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: `stmp.gmail.com`,
    port: 465,   
    secure: true,
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD
    }
})
module.exports = {
    sendContactEmail(name, email, subject, message) {
        console.log('hit contact method', {name, email, subject, message})
        let mailOptions = {
            from: process.env.ADMIN_EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: subject,
            text: 'Somebody Contacted you at your portfolio site.',
            html: `<div>
                    <h2>This email address send you a email. ${name}</h2>
                    <p>This email address messaged you ---> ${email}.</p>
                    <p>${message}</p>
                 </div>`
        };
        transporter.sendMail(mailOptions, (err, data) => {
            if(err) console.log('Send Mail Error------------------', err);
            console.log('Send Data -----------------------', data);
        })
    }
}
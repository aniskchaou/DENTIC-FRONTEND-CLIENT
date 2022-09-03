
var nodemailer = require('nodemailer');

exports.sendEmail = (receiver) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kchaouanis27@gmail.com',
            pass: 'zycrpdavgcydkknz'
        }
    });

    var mailOptions = {
        from: 'youremail@gmail.com',
        to: receiver,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

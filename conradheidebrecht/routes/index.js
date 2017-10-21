var express = require('express');
var router = express.Router();

var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Profile - Conrad Heidebrecht' });
});
/* POST requests for sending email. */
router.post('/sendemail', function (req, res, next) {
    // use sendgrid api to send messages
    const msg = {
        to: email,
        from: selfemail,
        subject: subj,
        text: message
    };
    sgMail.send(msg);
});

module.exports = router;

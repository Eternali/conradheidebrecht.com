var express = require('express');
var router = express.Router();

var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Profile - Conrad Heidebrecht' });
});
/* POST requests for sending email. */
router.get('/sendemail', function (req, res) {
    let self = req.query.selfemail;
    let name = req.query.name;
    let email = req.query.email;
    let subj = req.query.subject;
    let message = req.query.message;

    // use sendgrid api to send messages
    const msg = {
        to: self,
        from: email,
        subject: subj,
        text: '<' + name + '> wrote: \n' + message
    };
    sgMail.send(msg);
});

module.exports = router;

var express = require('express');
var router = express.Router();

var pythonshell = require('python-shell');

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

    let success = true;

    let options = {
        mode: 'text',
        pythonPath: 'usr/bin/python3',
        pythonOptions: ['-u'],
        scriptPath: 'scripts',
        args: [name, email, self, subj, message]
    };

    pythonshell.run('send_email.py', options, function (error, results) {
        if (error) {
            success = false;
            throw error;
        }
        console.log('results: %j', results);
    });

    if (success) res.send('Your email has been sent. Thanks!');
    else res.send('Your email has failed to send. Please check your information!');
});

module.exports = router;

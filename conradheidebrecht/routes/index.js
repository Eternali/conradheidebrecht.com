var express = require('express');
var router = express.Router();

var pythonshell = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Profile - Conrad Heidebrecht' });
});

/* POST requests for sending email. */
router.post('/sendemail', function (req, res) {
    let self = req.body.selfemail;
    let name = req.body.name;
    let email = req.body.email;
    let subj = req.body.subject;
    let message = req.body.message;

    console.log(self + name + email + subj + message);

    let success = true;

    let options = {
        mode: 'text',
        pythonPath: '/usr/bin/python3',
        pythonOptions: ['-u'],
        scriptPath: 'scripts',
        args: [name, email, self, subj, message]
    };

    pythonshell.run('send_email.py', options, function (error, results) {
        if (error) success = false;
        console.log('results: %j', results);
    });

    if (success) res.send('Your email has been sent. Thanks!');
    else res.send('Your email has failed to send. Please check your information!');
});

module.exports = router;

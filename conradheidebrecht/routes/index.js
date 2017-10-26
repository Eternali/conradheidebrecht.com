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

    let options = {
        mode: 'text',
        pythonPath: '/usr/bin/python3',
        pythonOptions: ['-u'],
        scriptPath: 'scripts',
        args: [name, email, self, subj, message]
    };

    pythonshell.run('send_email.py', options, function (error, results) {
        if (error) throw error;
        console.log('results: %j', results);
        res.send(results);
    });
});

module.exports = router;

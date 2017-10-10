var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Profile - Conrad Heidebrecht' });
});
/* POST requests for sending email. */
// router.post('/sendEmail', function (req, res, next) {
//
// });

module.exports = router;

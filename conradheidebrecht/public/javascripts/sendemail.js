// 'use strict';
// const nodemailer = require('nodemailer');
//
// let transport = nodemailer.createTransport('SMTP', {
//     service: 'gmail',
//     auth: {
//         user: '',
//         pass: ''
//     }
// });
//
// let message = {
//
// };


function sendEmail () {

    let parameters = {
        selfemail: 'crbheide@edu.uwaterloo.ca',
        name: $('#contactName').val(),
        email: $('#contactEmail').val(),
        subject: $('#contactSubject').val(),
        message: $('#contactMessage').val()
    };
    $.get('/sendemail', parameters, function (data) {
        $('#emailresult').html(data);
    });

}

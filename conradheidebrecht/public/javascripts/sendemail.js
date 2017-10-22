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

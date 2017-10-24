function sendEmail () {

    let parameters = {
        selfemail: 'crbheide@edu.uwaterloo.ca',
        name: $('#contactName').val(),
        email: $('#contactEmail').val(),
        subject: $('#contactSubject').val(),
        message: $('#contactMessage').val()
    };
    $.ajax({type: 'POST', data: JSON.stringify(prameters), contentType: 'application/json', url: '/sendemail', success: function (data) {
        $('#emailresult').html(data);
    }});
    //$.get('/sendemail', parameters, function (data) {
    //    $('#emailresult').html(data);
    //});

}

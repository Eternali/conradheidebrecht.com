function sendEmail () {

    let parameters = {
        selfemail: 'crbheide@edu.uwaterloo.ca',
        name: $('#contactName').val(),
        email: $('#contactEmail').val(),
        subject: $('#contactSubject').val(),
        message: $('#contactMessage').val()
    };
    $.ajax({
        type: 'POST',
        data: JSON.stringify(parameters),
        contentType: 'application/json',
        url: '/sendemail',
        success: function (data) {
            $('#emailresult').html(data);
        },
        error: function (response) {
            $('#emailresult').html(response);
        }
    });
    //$.get('/sendemail', parameters, function (data) {
    //    $('#emailresult').html(data);
    //});

}

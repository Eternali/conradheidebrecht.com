// $('emailSubmit').on('click', function () { sendEmail(); });

function sendEmail () {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status != 200) {
                document.getElementById('emailsuccess').innerHTML = "errors.";
            }
            else {
                let response = JSON.parse(req.responseText);
                document.getElementById('emailsuccess').innerHTML = response.success;
            }
        }
    }
    req.open('POST', '/send_email');
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    let selfemail = 'crbheide@edu.uwaterloo.ca';
    let name = document.getElementById('contactName').value;
    let email = document.getElementById('contactEmail').value;
    let subject = document.getElementById('contactSubject').value;
    let message = document.getElementById('contactMessage').value;

    // encode the post request manually, without jquery
    req.send(encodePostVars({
                            'selfemail': selfemail,
                            'name': name,
                            'email': email,
                            'subject': subject,
                            'message': message
                        }));

    return false;
}

function encodePostVars (valsDict) {
    let encodedStr = '';
    let valkeys = Object.keys(valsDict);
    for (let val in valsDict) {
        if (valkeys[valkeys.length-1] == val) encodedStr += val + '=' + valsDict[val];
        else encodedStr += val + '=' + valsDict[val] + '&';
    }

    return encodedStr;
}

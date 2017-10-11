jQuery.fn.letterDrop = function () {

};

$(document).ready(function () {

    // change the color of the navbar elements
    $('#nav').on('click', 'li', function () {
        $('#nav').find('li').removeClass('current');
        $(this).addClass('current');
    });

});
jQuery.fn.letterDrop = function () {
    let obj = this;

    let drop = {
        arr: obj.text().split(''),

        range: {
            min: 1,
            max: 9
        },

        // generate extra CSS
        styles: function () {
            let dropDelays = '\n', addCSS;
            for (i = this.range.min; i <= this.range.max; i++ )
                dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';

            addCSS = $('<style>' + dropDelays + '</style>');
            $('head').append(addCSS);
        },

        main: function () {
            let dp = 0;
            obj.text('');
            $.each(this.arr, function (index, value) {
                dp = dp.randomInt(drop.range.min, drop.range.max);
                if (value === ' ') value = '&nbsp';
                obj.append('<span class="letterDrop ld' + dp + '">' + value + '</span>');
            });
        }
    };

    // make it easier to generate random integers within a range
    Number.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // create styles and initiate them
    drop.styles();
    drop.main();
};

$(document).ready(function () {

    // change the color of the navbar elements
    $('#nav').on('click', 'li', function () {
        $('#nav').find('li').removeClass('current');
        $(this).addClass('current');
    });

    // animate name drop
    $('.title-name').letterDrop();

});
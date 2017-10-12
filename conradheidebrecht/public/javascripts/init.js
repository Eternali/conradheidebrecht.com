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

    // functionality and behaviour of navbar //

    let sections = $('section');
    let navlinks = $('#nav-wrap').find('a');
    sections.waypoint({
        handler: function (event, direction) {
            let activeSection = $(this);
            if (direction === 'up') activeSection = activeSection.prev();
            let activeLink = $('#nav-wrap').find('a[href="#' + activeSection.attr('id') + '"]');
            navlinks.parent().removeClass('current');
            activeLink.parent().addClass('current');
        },
        offset: '35%'
    });

    $('#nav').on('click', 'li', function () {
        $('#nav').find('li').removeClass('current');
        $(this).addClass('current');
    });

    $('.smoothscroll').on('click', function (e) {
        // stop page from moving to requested section
        e.preventDefault();

        let target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });


    // animate name drop
    $('.title-name').letterDrop();

});
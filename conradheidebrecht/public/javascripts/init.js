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


// skill toggler function
function toggleSkills(range) {
    let val = range.value;
    let $left = $('#langmsg');
    let $middle = $('#bothmsg');
    let $right = $('#techmsg');
    let $langpic = $('.langpic');
    let $techpic = $('.techpic');
    // change text (toggleClass won't work because there are three options).
    switch (val) {
        case '0':
            range.className = 'rangeLeft';
            $left.css('opacity', '1');
            $middle.css('opacity', '.4');
            $right.css('opacity', '.4');
            $langpic.addClass('active').removeClass('both');
            $techpic.removeClass('active').removeClass('both');
            break;
        case '1':
            range.className = 'rangeNeutral';
            $left.css('opacity', '.4');
            $middle.css('opacity', '1');
            $right.css('opacity', '.4');
            $langpic.removeClass('active').addClass('both');
            $techpic.removeClass('active').addClass('both');
            break;
        case '2':
            range.className = 'rangeRight';
            $left.css('opacity', '.4');
            $middle.css('opacity', '.4');
            $right.css('opacity', '1');
            $langpic.removeClass('active').removeClass('both');
            $techpic.addClass('active').removeClass('both');
            break;
    }
}


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

    $('#nav-custom').on('click', 'li', function () {
        $('#nav-custom').find('li').removeClass('current');
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

    // add a waypoint to reanimate name whenever the user comes back to home
    $('#home').waypoint({
        handler: function (event, direction) {
            if (direction === 'up') $('.title-name').letterDrop();
        }
    });


});
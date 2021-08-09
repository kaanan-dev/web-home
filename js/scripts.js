$(function () {

    // init feather icons
    feather.replace();

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });


    //media social
    $('.social-media').each((index, item) => {
        let id = $(item).children().attr('id');
        let scmddata = Object.keys(data)
            .filter(d => d === id.substr(id.length - 2));
        if (!scmddata || !scmddata.length) return true;
        $(item).children().attr('href', data[scmddata[0]]);

    })

    //sub
    $('.sub').each((i,item) => {
        let classList = $(item).attr('class').split(/\s+/);
        let currentClass = classList.filter(d => d.substr(0,3) === 'sub' && d.length > 3);
        if (!currentClass || !currentClass.length) return true;

        let subdata =  Object.keys(sub).filter(d => d === currentClass[0].substr(currentClass[0].length - 4));
        if (!subdata || !subdata.length) return true;

        if(!$(item).attr('href')){
            $(item).click(function(){
                debugger;
                location.href = sub[subdata[0]];
            })
            return true;
        }
        $(item).attr('href', sub[subdata[0]]);


    })
});
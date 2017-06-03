$(function(){



    $(document).on('click','ul.tabs li:not(.active)', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs__contents').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.interface__navigation--title').on('click', function(event){
        event.preventDefault();
        $('.interface__navigation--body').toggleClass('open');
    })

    ;(function(){
        var resize    = $(".interface__right-pan");
        var pannel    = $(".interface__right");
        var currWidth = pannel.width();
        var unlock    = false;
        $(document).mousemove(function(e) {
            var change = $(window).width() - e.clientX;
           if(unlock) {
                pannel.css("width", change);
            }
        });
        resize.mousedown(function(e) {
            currWidth = pannel.width();
            unlock     = true;
        });
        $(document).mousedown(function(e) {
            if(unlock) {
              e.preventDefault();
            }
        });
        $(document).mouseup(function(e) {
            unlock = false;
        });
    })();


    // Прелоадер
    window.onload = function(){

        setTimeout(function(){
            var preloader = document.getElementById('page-preloader');
            if( !preloader.classList.contains('done') ){
                preloader.classList.add('done');
            }
        }, 1000);
    }
    $(document).on('keydown', function(event) {

        if (event.keyCode === 18 && event.keyCode === 82) {
            $('.interface__work').toggleClass('ruler');
        }

    });
    $('.interface__work').ruler();

});

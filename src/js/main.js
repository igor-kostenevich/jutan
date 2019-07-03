// counter
$(document).ready(function () {

    //scroll to counts & init spincrement libs
    var show = true;
    $(window).on('scroll', function(){

        if(!show) return false;

        var w_top = $(window).scrollTop(); 
        var e_top = $('#counts').offset().top;

        if(w_top + 525 >= e_top){
            $(".spincrement").spincrement({
                duration: 1600
            });
            show = false;
        }
    });

    //popup image
    $(".our-work__img-container_img-wrap_item").magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    //aos animate
    AOS.init({
        duration: 1200,
        once: true
    });
});



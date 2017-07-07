function barToggle() {
    $("#wrapper").toggleClass("toggled");
}

$(document).ready(function() {
    /*var inSelection = false;*/
    var bars = $('#menu-toggle .icon-bar');

    $("#menu-toggle").click(function(){
        bars.toggleClass('blacknwhite');   
    });
    /*
    $("#menu-toggle").click(function(e){
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        open = !open;
    });
    */
    $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $("#up").fadeIn();
    } else {
        $("#up").fadeOut();
    }
    });

    $("#up").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
    }); 

    $(".home").click(function() {
        barToggle();
        bars.toggleClass('blacknwhite');
        $("html, body").stop().animate({
            scrollTop: $("#1").offset().top
        }, 700);
    });
    $(".about").click(function() {
        barToggle();
        bars.toggleClass('blacknwhite');
        $("html, body").stop().animate({
            scrollTop: $("#2").offset().top
        }, 700);
    });
    $(".contact").click(function() {
        barToggle();
        bars.toggleClass('blacknwhite');
        $("html, body").stop().animate({
            scrollTop: $("#3").offset().top
        }, 700);
    });
    /*
    jQuery(window).scroll(function() {
        var scrollPosition = jQuery(this).scrollTop();
        var full_page_height = $("#2").height();

        if (scrollPosition > 0.9 * $("#2").offset().top &&
            scrollPosition < 0.9 * $("#2").offset().top + full_page_height
            && open == false)  {
            inSection = true;
            bars.css('background-color', 'white');
        } else {
            inSection = false;
            bars.css('background-color', 'black');
        }
    });
    */

});
$(document).ready(function() {

        $('body').scrollspy({ target: '#navbar-example' });
        
        $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $("#up").fadeIn();
        } else {
            $("#up").fadeOut();
        }
        });

        var away = false;
        $("#up").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 700);
        });    

        $(".home").click(function() {
            $("html, body").animate({
                scrollTop: $("#1").offset().top
            }, 700);
        });
        $(".about").click(function() {
            $("html, body").animate({
                scrollTop: $("#2").offset().top
            }, 700);
        });
        $(".contact").click(function() {
            $("html, body").animate({
                scrollTop: $("#3").offset().top
            }, 700);
        });

});
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

        $("#sec").click(function() {
            $("html, body").animate({
                scrollTop: $("#2").offset().top
            }, 700);
        });
        $("#first").click(function() {
            $("html, body").animate({
                scrollTop: $("#1").offset().top
            }, 700);
        });
        $("#third").click(function() {
            $("html, body").animate({
                scrollTop: $("#3").offset().top
            }, 700);
        });
        $("#fourth").click(function() {
            $("html, body").animate({
                scrollTop: $("#4").offset().top
            }, 700);
        });

});
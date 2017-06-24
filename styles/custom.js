    $('body').scrollspy({ target: '#navbar-example' })    

    $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $("#up").fadeIn();
    } else {
        $("#up").fadeOut();
    }
    });
    $(document).ready(function() {
        var away = false;
        $("#up").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 500);
        });    
    });

    $("#sec").click(function() {
        $("html, body").animate({
            scrollTop: $("#2").offset().top
        }, 500);
    });
    $("#first").click(function() {
        $("html, body").animate({
            scrollTop: $("#1").offset().top
        }, 500);
    });
    $("#third").click(function() {
        $("html, body").animate({
            scrollTop: $("#3").offset().top
        }, 500);
    });
    $("#fourth").click(function() {
        $("html, body").animate({
            scrollTop: $("#4").offset().top
        }, 500);
    });

    $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $("#up").fadeIn();
    } else {
        $("#up").fadeOut();
    }
    });

    $(document).ready(function() {
        var away = false;
        $("#up").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 500);
        });    
    });
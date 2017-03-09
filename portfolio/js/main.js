(function($, viewport){
    $(document).ready(function(){
        $("#scroll").click(function() {
            $('html, body').animate({
                scrollTop: $("#portfolio").offset().top
            }, 2000);
        });

        $(window).resize(
            viewport.changed(function() {
                if(viewport.is('<md')) {
                    $(".outer-left").css("padding", "1em 0 1em 0");
                    $(".outer-right").css("padding", "1em 0 1em 0");
                    $("#portfolio-second-row").hide();
                }
                if(viewport.is('>=md')) {
                    $(".outer-left").css("padding", "1em 0.5em 1em 0");
                    $(".outer-right").css("padding", "1em 0 1em 0.5em");
                    $("#portfolio-second-row").show();
                }
            })
        );
    });
})(jQuery, ResponsiveBootstrapToolkit);

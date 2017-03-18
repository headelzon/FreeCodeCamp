(function($, viewport){
    $(document).ready(function(){
        $("#scroll").click(function() {
            $('html, body').animate({
                scrollTop: $("#portfolio").offset().top
            }, 2000);
        });

        $(window).resize(
            viewport.changed(function() {
                if(viewport.is('xs')) {
                    $(".outer-left").css("padding", "0 0 1em 0");
                    $(".outer-right").css("padding", "0 0 1em 0");
                    $("#portfolio-second-row").hide();
                }
                if(viewport.is('>=sm')) {
                    $(".outer-left").css("padding", "0 0.5em 1em 0");
                    $(".outer-right").css("padding", "0 0 1em 0.5em");
                    $("#portfolio-second-row").show();
                }
            })
        );
        
        var resizeIntro = function() {
            var heightLeft = document.getElementById("intro").offsetHeight;
            $("#about-me").css("min-height", heightLeft);
        };

        var timer =  setInterval(resizeIntro, 10); // call every 10 milliseconds
        // Variable to hold request
        var request;

        // Bind to the submit event of our form
        $("#submit").submit(function(event){

            // Prevent default posting of form - put here to work in case of errors
            event.preventDefault();

            // Abort any pending request
            if (request) {
                request.abort();
            }
            // setup some local variables
            var $form = $(this);

            // Let's select and cache all the fields
            var $inputs = $form.find("input, select, button, textarea");

            // Serialize the data in the form
            var serializedData = $form.serialize();

            // Let's disable the inputs for the duration of the Ajax request.
            // Note: we disable elements AFTER the form data has been serialized.
            // Disabled form elements will not be serialized.
            $inputs.prop("disabled", true);

            // Fire off the request to /form.php
            request = $.ajax({
                url: "form.php",
                type: "post",
                data: serializedData
            });

            // Callback handler that will be called on success
            request.done(function (response, textStatus, jqXHR){
                // Log a message to the console
                console.log("Hooray, it worked!");
                $("#myModal").modal('hide');

            });

            // Callback handler that will be called on failure
            request.fail(function (jqXHR, textStatus, errorThrown){
                // Log the error to the console
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            });

            // Callback handler that will be called regardless
            // if the request failed or succeeded
            request.always(function () {
                // Reenable the inputs
                $inputs.prop("disabled", false);
            });

        });
    });
})(jQuery, ResponsiveBootstrapToolkit);

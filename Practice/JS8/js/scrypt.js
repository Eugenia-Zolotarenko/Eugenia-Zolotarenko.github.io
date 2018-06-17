
$(document).ready(function () {
    $("div").append("<em></em>");
    var titles = $('input[title]');
    var ems = $('em');
    for ( var i = 0; i < titles.length; i++ ) {
        $(ems[i]).text( $(titles[i]).attr("title"));
    }

    $("input").hover(
        function(){
            event.preventDefault();
            $(this).next("em").show();

    },  function(){
            $(this).next("em").hide();

    });

    $('input[type="button"]').on( "click", function() {
        $('em').show();
        //setTimeout(function() { $("em").hide('slow'); }, 2000);
        });
});




/*$( function() {
    var tooltips = $( "[title]" ).tooltip({
        position: {
            my: "left top",
            at: "right+5 top-5",
            collision: "none"
        }
    });
    $( "<button>" )
        .text( "Show help" )
        .button()
        .on( "click", function() {
            tooltips.tooltip( "open" );
        })
        .insertAfter( "form" );
} );*/
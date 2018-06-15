
$(document).ready(function () {
    $("div").append("<em></em>");

    $("input").hover(
        function(){
            var hoverText = $(this).attr("title");

            $(this).next("em").text(hoverText);
            $(this).removeAttr("title");
            $(this).next("em").show();


    },  function(){
            $(this).next("em").hide();

    });
})




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
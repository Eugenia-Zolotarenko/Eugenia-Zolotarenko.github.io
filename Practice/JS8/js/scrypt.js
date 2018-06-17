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
    });
});

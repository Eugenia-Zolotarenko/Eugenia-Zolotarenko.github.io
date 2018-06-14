$(document).ready(function () {
    $(".tab:first").addClass("active");
    $("#tabs-1").siblings("div").hide();

    $(".tab").on("click", function(){

        $(this).toggleClass("active");
        $(this).siblings(".tab").removeClass("active");

        var  link = $(this).find("a").attr("href");

        $(link).siblings("div").hide();
        $(link).show();
    });
})

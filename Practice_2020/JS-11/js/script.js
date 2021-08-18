$(function () {
    $('div.carousel').slider({
        imageWidth: 200,
        imageMarginRight: 20
    });

    console.log (`browser: ${$(window).width()}`);
    console.log (`carousel: ${$('.carousel').width()}`);
    console.log (`hider: ${$('.carousel__hider').width()}`);
});
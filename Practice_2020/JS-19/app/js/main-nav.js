$(function (){

    let $headerMenu = $('#main-nav');

    $headerMenu.on('click', '.main-nav__item',  null, toggleClass );

    function toggleClass (event) {

        $(this).addClass('main-nav__item_active');
        $(this).siblings().removeClass('main-nav__item_active');

    }

});
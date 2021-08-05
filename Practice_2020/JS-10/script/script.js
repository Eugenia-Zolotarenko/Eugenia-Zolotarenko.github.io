
$(function (){

    let $headerMenu = $('.header-menu__list');
    let $headerSubmenu = $headerMenu.find('.js-submenu');


    let $sidebarMenu = $('.catalog__list');

    hasSubmenu ($headerMenu);
    hasSubmenu ($sidebarMenu);

     $headerMenu.on('click', '.js-menu__item', null, openSubmenu);
    $sidebarMenu.on('click', '.js-menu__item', null, openSubmenu);


    /*animation with jquery.color*/
    $headerSubmenu.on('mouseenter', function () {
                    $(this).animate({
                        backgroundColor: '#03C'
                    }, 500);
               })
            .on('mouseleave', function () {
                    $(this).animate({
                        backgroundColor: '##0CF'
                    }, 500);
               });



    function openSubmenu (event) {
        event.preventDefault();

        let $submenuCurrent = $(this).find('.js-submenu');
        let $submenuAll = $(this).siblings().find('.js-submenu');


        $submenuAll.slideUp();                 /*hide submenu for items, that is not current*/
        $submenuAll.parent().removeClass('is-opened');

        $submenuCurrent.slideToggle();
        $(this).toggleClass('is-opened');
    }


    function hasSubmenu (list) {
        /*  функция добавления класса has-submenu для пунктов, у которых есть подменю.
            list -  список, для елементов которого нужно установить класс has-submenu
            js-menu__item  класс для пункта (li) у которого есть подменю
            js-submenu класс для подменю (ul) */

        let $el = list.find( '.js-menu__item > .js-submenu' );

        $el.parent().addClass('has-submenu');
    }

});
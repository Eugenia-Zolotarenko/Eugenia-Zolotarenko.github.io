
$(function (){

    let $menu = $('.header-menu__list');
    let $submenu = $menu.find('.header__submenu');

    hasSubmenu ();

    $menu.on('click', '.header-menu__item', null, openSubmenu);


    function openSubmenu (event) {
        event.preventDefault();

        let $currentSubmenu = $(this).find('.header__submenu');

        $submenu.each(function (index, item) {
            /*hide submenu for items, that is not current*/

             if ( item !== $currentSubmenu[0] ) {
                 $(item).slideUp();
                 $(item).parent().removeClass('is-opened');
             }
        });

        $currentSubmenu.slideToggle();
        $(this).toggleClass('is-opened');
    }


/*animation with jquery.color*/
    $submenu.on('mouseenter', function () {
        $(this).animate({
            backgroundColor: '#03C'
        }, 500);
    })
        .on('mouseleave', function () {
            $(this).animate({
                backgroundColor: '##0CF'
            }, 500);
        });

    function hasSubmenu () {
        /* функция добавления стрелочки для пунктов, у которых есть подменю */

        let $el = $menu.find( 'li > ul' ); /*при необходимости для меню большей вложенности
         возможно конретизировать селекторы через классы */

        $el.parent().addClass('has-submenu');
    }

});
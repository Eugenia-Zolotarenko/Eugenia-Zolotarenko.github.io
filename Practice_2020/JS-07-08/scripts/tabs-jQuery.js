'use strict';

$(function(){
    let $tabs = $('#tabs');

    showFirstTab($tabs);

    $tabs.on('click',   '.tab__link', null, openTab)
         .on('keydown', '.tab__link', null, moveFocus)
         .on('keyup',   '.tab__link', null, openTabWithKey);


    function showFirstTab (tabList) {
        let $firstTab = tabList.children(':first-child');
        let $firstTabContentId = $firstTab.attr('href'); /*tabContent Id = tab-link 'href' attribute*/
        let $firstTabContent =  $($firstTabContentId);

        $firstTab.addClass("is-active");  /*add an "is-active" class to the link that opened the tab*/
        $firstTabContent.show();  /*Show the first tab*/
    }




/*Check is Keyup handler for $tabs on or off and functions to on and off handler*/
    let isKeyupHandlerOn;

    function onKeyupHandler () {
        if ( isKeyupHandlerOn === false)  {
            $tabs.on('keyup', '.tab__link', null, openTabWithKey);
            return  isKeyupHandlerOn = true;
        }
    }

    function offKeyupHandler () {
        $tabs.off('keyup', '.tab__link', openTabWithKey);
        return  isKeyupHandlerOn = false;
    }




    /*check if Control keys pressed to handle Cltr+ArrowLeft|ArrowRight keydown*/

    let ctrlIsPressed;

    $(window).on('keydown', null, null, function (event) {
        if( event.code === 'ControlLeft' || event.code === 'ControlRight' ) { ctrlIsPressed = true; }
    });

    $(window).on('keyup', null, null, function (event) {
        if( event.code === 'ControlLeft' || event.code === 'ControlRight' ) { ctrlIsPressed = false; }
    });




    function openTab(event) {
         let $tabContentId = $(this).attr('href');

        // Get all elements with class="tab__content" and hide them
        $(".tab__content").hide();

        // Get all elements with class="tab__link" and remove the class "is-active"
        $(".tab__link").removeClass('is-active');

        // Show the current tab, and add an "is-active" class to the button that opened the tab
        $($tabContentId).show();
        $(this).addClass("is-active");
    }



    function moveFocus (event) {

        if (event.code === 'Enter' || event.code === 'NumpadEnter') event.preventDefault();

        let $tabindex = $(this).attr('tabindex');
        let $nextTab;
        let codes = ['ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'Tab', 'Enter', 'NumpadEnter', 'Space', 'Home',
                     'End'];

        if (!codes.includes(event.code)) return;

        /* computing the nex tab to be focused*/
        switch (true) {
            case ( ['ArrowRight', 'ArrowUp'].includes(event.code)):
                $tabindex++;
                onKeyupHandler();
                break;

            case ( ['ArrowLeft', 'ArrowDown'].includes(event.code) ):
                $tabindex--;
                onKeyupHandler();
                break;

            case ( ['Enter', 'NumpadEnter', 'Space', 'Tab'].includes(event.code) ):
                onKeyupHandler();
                break;
        }

        let $firstTabIndex = $tabs.children(':first-child').attr('tabindex');
        let $lastTabIndex = $tabs.children(':last-child').attr('tabindex');

        switch (true) {
            case ( ($tabindex > $lastTabIndex) || event.code === 'Home' ):
                $tabindex = $firstTabIndex;
                break;

            case ( ($tabindex < $firstTabIndex) || event.code === 'End' ):
                $tabindex = $lastTabIndex;
                break;
        }

        $nextTab = $(`[tabindex = ${$tabindex}]`);
        $nextTab.focus();

        if (ctrlIsPressed && ['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.code) ) {
            offKeyupHandler();
        }
    }


    function openTabWithKey(event)  {

            let $tabContentId = $(this).attr('href');

            // Get all elements with class="tab__content" and hide them
            $(".tab__content").hide();

            // Get all elements with class="tab__link" and remove the class "is-active"
            $(".tab__link").removeClass('is-active');

            $(this).addClass("is-active"); /*add an "is-active" class to the link that opened the tab*/

            $($tabContentId).fadeIn('slow'); /*Show the focused tab*/
    }
} );



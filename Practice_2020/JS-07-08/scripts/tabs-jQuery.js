'use strict';

$(function(){
    let $tabs = $('#tabs');
    let isKeyUpOn;

    showFirstTab($tabs);

    $tabs.on('click', '.tab__link', null,  openTab)
         .on('keydown', '.tab__link' , null, moveFocus)
         .on('keyup', '.tab__link',null, openTabWithKey);


    function showFirstTab (tabList) {
        let $firstTab = tabList.children(':first-child');
        let $firstTabContentId = $firstTab.attr('href'); /*tabContent Id = tab-link 'href' attribute*/
        let $firstTabContent =  $($firstTabContentId);

        $firstTab.addClass("is-active");  /*add an "is-active" class to the link that opened the tab*/
        $firstTabContent.show();  /*Show the first tab*/
    }


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

    /*check if Control keys pressed to handle Cltr+ArrowLeft|ArrowRight keydown*/

    let ctrlIsPressed;

    $(window).on('keydown', null, null, function (event) {
        if( event.code === 'ControlLeft' || event.code === 'ControlRight' ) { ctrlIsPressed = true; }
    });

    $(window).on('keyup', null, null, function (event) {
        if( event.code === 'ControlLeft' || event.code === 'ControlRight' ) { ctrlIsPressed = false; }
    });


    function moveFocus (event) {

        //if (event.code === 'Enter' || event.code === 'NumpadEnter')  event.preventDefault();


        let $tabindex = $(this).attr('tabindex');
        let $nextTab;
        let codes = ['ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'Tab', 'Enter', 'NumpadEnter' ];

        if (!codes.includes(event.code) ) return;

        /* computing the nex tab to be focused*/
        switch (true) {
            case (event.code === 'ArrowRight' || event.code === 'ArrowUp' || event.code === 'Tab'):
                $tabindex++;
                if ( isKeyUpOn === false)  {
                    $tabs.on('keyup', '.tab__link', null, openTabWithKey);
                    isKeyUpOn = true;
                }
                break;

            case (event.code === 'ArrowLeft' || event.code === 'ArrowDown'):
                $tabindex--;
                if ( isKeyUpOn === false)  {
                    $tabs.on('keyup', '.tab__link', null, openTabWithKey);
                    isKeyUpOn = true;
                }
                break;

           /* case (event.code === 'Enter' || event.code === 'NumpadEnter'):
                $(this).focus();
                break;*/
        }

        let $firstTabIndex = $tabs.children(':first-child').attr('tabindex');
        let $lastTabIndex  = $tabs.children(':last-child' ).attr('tabindex');

        if ($tabindex > $lastTabIndex)  { $tabindex = $firstTabIndex; }
        if ($tabindex < $firstTabIndex) { $tabindex = $lastTabIndex;  }


        $nextTab = $(`[tabindex= ${$tabindex}]`);
        $nextTab.focus();


        /*CTRL + DOWN/LEFT: Move focus to the previous tab.
          If on first tab, moves focus to last tab. */
        if ( ctrlIsPressed  && (event.code === 'ArrowLeft' || event.code === 'ArrowDown') )  {
            $tabindex--;
            $nextTab.focus();
            $tabs.off('keyup', '.tab__link', openTabWithKey); /*The focused tab must be manually activated*/
            isKeyUpOn = false;

        } else {
            /*CTRL + UP/RIGHT: Move focus to the previous tab.
                     If on first tab, moves focus to last tab. The focused tab must be manually activated.*/
            if (ctrlIsPressed && (event.code === 'ArrowRight' || event.code === 'ArrowUp')) {
                $tabindex++;
                $nextTab.focus();
                $tabs.off('keyup', '.tab__link', openTabWithKey); /*The focused tab must be manually activated*/
                isKeyUpOn = false;
            }
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



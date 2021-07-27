'use strict';

$(function(){
    let $tabs = $('#tabs');

    showFirstTab($tabs);

    $tabs.on('click', '.tab__link', null,  openTab);


    function showFirstTab (tabList) {
        let $firstTab = tabList.children(':first-child');
        let $firstTabContentId = $firstTab.attr('href'); /*;tabContent Id = tab-link 'href' attribute*/
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

    let ctrlIsPressed;

    $(window).on('keydown', null, null, function (event) {
        if( event.code === 'ControlLeft' || event.code === 'ControlRight' ) { ctrlIsPressed = true; }
    });

    $(window).on('keyup', null, null, function (event) {
        if( event.code === 'ControlLeft' || event.code === 'ControlRight' ) { ctrlIsPressed = false; }
    });

    $tabs.on('keydown', '.tab__link' , null, openTabWithKeydown);

    function openTabWithKeydown(event) {
        let $tabindex = $(this).attr('tabindex');
        let $nextTab;
        console.log(event.code);


        // Get all elements with class="tab__content" and hide them
        $(".tab__content").hide();

        // Get all elements with class="tab__link" and remove the class "is-active"
        $(".tab__link").removeClass('is-active');


        /* computing the nex tab to be focused and shown*/
        switch (true) {
            case (event.code === 'ArrowRight' || event.code === 'ArrowUp' /*|| event.code === 'Tab'*/):
                $tabindex++;
                break;

            case (event.code === 'ArrowLeft' || event.code === 'ArrowDown'):
                $tabindex--;
                break;

           /* case ( ctrlIsPressed  && event.code === 'ArrowLeft' ):
                $tabindex--;
                console.log(ctrlIsPressed);
                break;*/
        }

        let $firstTabIndex = $tabs.children(':first-child').attr('tabindex');
        let $lastTabIndex  = $tabs.children(':last-child' ).attr('tabindex');

        if ($tabindex > $lastTabIndex)  { $tabindex = $firstTabIndex; }
        if ($tabindex < $firstTabIndex) { $tabindex = $lastTabIndex;  }

        $nextTab = $(`[tabindex= ${$tabindex}]`);

        $nextTab.focus()
                .addClass("is-active");

        let $tabContentId = $nextTab.attr('href');

        $($tabContentId).fadeIn('slow');
    }
});



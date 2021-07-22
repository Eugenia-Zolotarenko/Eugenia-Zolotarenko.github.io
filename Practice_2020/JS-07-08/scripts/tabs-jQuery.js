'use strict';

$(function(){
    let $tabs = $('#tabs');

    showFirstTab($tabs);

    $tabs.on('click', '.tab__link', null,  $openTab);


    function showFirstTab (tabList) {
        let $firstTab = tabList.children(':first-child');
        let $firstTabContentId = $firstTab.attr('href'); /*;tabContent Id = tab-link 'href' attribute*/
        let $firstTabContent =  $($firstTabContentId);

        $firstTab.addClass("is-active");  /*add an "is-active" class to the link that opened the tab*/
        $firstTabContent.show();  /*Show the first tab*/
    }


    function $openTab(event) {
         let $tabContentId = $(this).attr('href');

        // Get all elements with class="tab__content" and hide them
        $(".tab__content").hide();

        // Get all elements with class="tab__link" and remove the class "is-active"
        $(".tab__link").removeClass('is-active');

        // Show the current tab, and add an "is-active" class to the button that opened the tab
        $($tabContentId).show();
        $(this).addClass("is-active");
    }
});



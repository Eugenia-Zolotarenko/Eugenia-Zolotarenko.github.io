

let tabs = document.getElementById('tabs');

showFirstTab (tabs);

tabs.addEventListener('click', openTab);



function showFirstTab (tabList) {
    let tabLinks = tabList.querySelectorAll('.tab-link');    /*list of buttons*/
    let firstTab = tabLinks[0];

    /*tabContent Id = tab-link 'href' attribute without first symbol '#'*/
    let firstTabContentId = tabLinks[0].getAttribute('href').slice(1);
    let firstTabContent =  document.getElementById(firstTabContentId);

    firstTab.className += " is-active";  /*add an "is-active" class to the link that opened the tab*/
    firstTabContent.style.display = "block";  /*Show the first tab*/
}



function openTab(event) {
    let target = event.target;
    if (target.tagName != 'A') return;

    let tabContentId = event.target.getAttribute('href').slice(1);

    // Get all elements with class="tab-content" and hide them
    let tabContent = document.getElementsByClassName("tab-content");
    for (let content of tabContent) {
        content.style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "is-active"
    let tabLinks = document.getElementsByClassName("tab-link");
    for (let link of tabLinks) {
        link.className = link.className.replace(" is-active", "");
    }

    // Show the current tab, and add an "is-active" class to the button that opened the tab
    document.getElementById(tabContentId).style.display = "block";
    target.className += " is-active";
}
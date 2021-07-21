let tabs = document.getElementById('tabs');
let cities = tabs.querySelectorAll('.tab-link');

document.getElementsByClassName("tab-link")[0].className += " is-active";
document.getElementById(cities[0].dataset.city).style.display = "block";


tabs.addEventListener('click', openTab);

function openTab(event) {
    // Declare all variables
    let tabContent, tabLinks;
    let cityName = event.target.dataset.city;
    let target = event.target;

    if (target.tagName != 'BUTTON') return;

    // Get all elements with class="tab-content" and hide them
    tabContent = document.getElementsByClassName("tab-content");
    for (let content of tabContent) {
        content.style.display = "none";
    }

    // Get all elements with class="tab-links" and remove the class "is-active"
    tabLinks = document.getElementsByClassName("tab-link");
    for (let link of tabLinks) {
        link.className = link.className.replace(" is-active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    target.className += " is-active";
}
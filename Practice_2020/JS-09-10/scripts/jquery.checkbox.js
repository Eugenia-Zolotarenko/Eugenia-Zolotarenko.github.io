$(function() {

    $(".niceCheck")
        .on('mousedown', null, null, function () {
            changeCheck(jQuery(this)); /* при клике на чекбоксе меняем его вид и значение */
            })
        .each(
            /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с
            ним выставить вид */
            function () {
                changeCheckStart(jQuery(this));
            });


    function changeCheck(el)
    /*
        функция смены вида и значения чекбокса
        el - span контейнер дял обычного чекбокса
        input - чекбокс
    */ {
        let elem = el,
            input = elem.find("input").eq(0);
        if (!input.attr("checked")) {
            elem.css("background-position", "0 0");
            input.attr("checked", true)
        } else {
            elem.css("background-position", "-21px 0");
            input.attr("checked", false)
        }
        return true;
    }


    function changeCheckStart(el)
    /*
        если установлен атрибут checked, меняем вид чекбокса
    */ {
        let elem = el,
            input = elem.find("input").eq(0);
        if (input.attr("checked")) {
            elem.css("background-position", "0 0");
        }
        return true;
    }
});
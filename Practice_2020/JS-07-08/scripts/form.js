$( function() {
    let $input =  $('fieldset').find('input');
    let $showHelpButton =  $('#show-help');

    $input.on('focus mouseover', null, null, showTooltip)
          .on('blur  mouseout',  null, null, hideTooltip);

    $showHelpButton.on('click', null, null, showAllTooltips);


    function showTooltip(event) {
        event.preventDefault();
        let $toolTipText = $(this).attr('title');

        let $toolTipBox = $(`<div class="tooltip__text">${$toolTipText}</div>`);
        $(this).after($toolTipBox);

        let position = $(this).position();
        positionToolTip($toolTipBox, $(this).outerWidth(), position)
    }


    function hideTooltip() {
        $('.tooltip__text').fadeOut('slow', null,function () {$(this).remove()});
    }


    function positionToolTip(element, width, position){
        return  element.offset({top: position.top - 5 , left: position.left + width*1.05});
    }


    function showAllTooltips() {
        $input.each(function () {$(this).triggerHandler("focus" )} );
    }

} );


function uncheckRadio(eventObject) {
    eventObject.data.find('input[type="radio"]').prop('checked', false);
}

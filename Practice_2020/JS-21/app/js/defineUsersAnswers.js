function defineUsersAnswers () {

    const $form = $('#js-form-quiz');

    const $options = $form.find('input[type="radio"]');

    let checked = [];
    let j = 0;

    for (let i = 0; i < $options.length; i++) {

        if ($options[i].checked) {
            checked[j] = +$options[i].value;
            j++;
        }
    }

    return checked;
}


// try {
//     module.exports = defineUsersAnswers;
// } catch (e) {}

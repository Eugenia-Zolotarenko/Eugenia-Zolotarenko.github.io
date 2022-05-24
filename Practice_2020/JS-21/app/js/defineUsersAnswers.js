function defineUsersAnswers (obj) {

    let form = document.forms.quiz;
    let elements = form.elements;


/*Define array of all options*/
    let options = [];

    for (let i = 0; i < obj.quizList.length; i++){

        options[i] = elements[`answer_${i}`];
    }


/*Define array of options checked by user*/
    let checkedOptions = [];

    for (let i = 0; i < options.length; i++){

        for (let j = 0; j < options[i].length; j++){

            if (options[i][j].checked === true) {
                checkedOptions[i] = +options[i][j].value;
            }
        }
    }

    return checkedOptions;
}
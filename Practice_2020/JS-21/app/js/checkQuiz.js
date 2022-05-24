
function checkQuiz (eventObject) {

    let answers        = defineCorrectAnswers(eventObject.data);
    let checkedOptions = defineUsersAnswers  (eventObject.data);

    if ( _.isEqual(answers, checkedOptions)  === true)
        alert('test Passed');
    else
        alert('test Failed');
}


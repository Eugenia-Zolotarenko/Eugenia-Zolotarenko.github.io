
function checkQuiz (eventObject) {

    let answers        = defineCorrectAnswers(eventObject.data);
    let checkedOptions = defineUsersAnswers ();

    if ( _.isEqual(answers, checkedOptions)  === true)
        alert('test Passed');
    else
        alert('test Failed');

    return true;
}
//
// try {
//     module.exports = checkQuiz;
// } catch (e) {}
//



 function defineCorrectAnswers (obj) {

    let answersArr = [];

    for (let i=0; i < obj.quizList.length ; i++) {

        for (let j=0; j < obj.quizList[i].options.length ; j++) {

            if (!obj.quizList[i].options[j].isCorrect) continue;
            answersArr[i] = j;
        }
    }

    return answersArr;
}

// try {
//     module.exports = defineCorrectAnswers;
// } catch (e) {}
//


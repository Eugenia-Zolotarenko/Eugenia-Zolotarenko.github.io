var createDom = {
    createHead: function ( testName ) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(testName) );
        document.body.appendChild(div);
    },
    
    createList: function () {
        var questionList = document.createElement('ol');
        document.body.appendChild(questionList);

        var i = 1;
        while (true) {
            var question = prompt('Введите вопрос №' + i, '');

            if (!question) {
                break;
            }

            var questionItem = document.createElement('li');
            questionItem.appendChild(document.createTextNode(question + ' №' + i));
            questionList.appendChild(questionItem);

            var answerList = document.createElement('ul');
            questionItem.appendChild(answerList);

            var j = 1;
            while (true) {
                var answer = prompt('Введите вариант ответа №' + j, '');

                if (!answer) {
                    break;
                }

                var answerItem = document.createElement('li');
                var answerLabel = document.createElement('label');
                var answerOption = document.createElement('input');
                    answerOption.type = 'checkbox';

                var answerText = document.createElement('span');
                answerText.appendChild(document.createTextNode(answer + ' №' + j));

                answerItem.appendChild(answerLabel);
                answerLabel.appendChild(answerOption);
                answerLabel.appendChild(answerText);
                answerList.appendChild(answerItem);

                j++;
                }
            i++;
        }
    },
    
    createButton: function () {

        var buttonName = prompt('Введите название кнопки', '');

        var button = document.createElement('input');
        button.type = 'submit';

        if (buttonName != null) {
            button.value = buttonName;
        }

        document.body.appendChild(button);
    }

};

var testName = prompt('Enter test name', '');

if (testName != null) {
    createDom.createHead( testName );
    createDom.createList ();
    createDom.createButton ();
}

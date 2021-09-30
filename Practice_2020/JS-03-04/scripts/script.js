/*------------------------------------*\
 * Скрипт создает объект с [методами], которые будут динамически [генерировать] DOM c тестом,
 *  методы хранятся в одном объекте.
 *  Изначально на странице есть только `<body>`, вызывая методы объекта нужно создать dom-элементы
 * Для стилизации используется  [Bootstrap].
\*------------------------------------*/

let quiz = {
    wrapper : '',
    name : '',
    quizList : '',
    submitButton : '',

    createWrapper : function () {
        let container = document.createElement('div');
        container.className = 'container';
        document.body.append( container);

        this.wrapper = document.createElement('div');
        this.wrapper.className = 'row  justify-content-center';
        container.append(this.wrapper);
    },

    createQuizName : function () {
        let userNameTest = prompt('Enter Quiz name', ''); //название теста
        if (userNameTest) this.name = userNameTest;

        let testHead = document.createElement('h2');
        testHead.textContent = userNameTest;
        testHead.className = 'col-10  display-5  offset-md-3';
        this.wrapper.append(testHead);
    },

    createQuiz : function () {
        this.createWrapper();
        this.createQuizName();

        let newLine = document.createElement('div');
        newLine.className = 'w-100';
        this.wrapper.append(newLine);

        this.quizList = document.createElement('form');
        this.quizList.action = '/';
        this.quizList.method = 'post';
        this.quizList.className = 'col-auto  col-md-6  mt-3  list-group';
        this.wrapper.append(this.quizList);

        let i = 1;
        while (true) {
            let quizQuestion = prompt(`Enter question #${i}`); //вопрос теста

            if(!quizQuestion) break;

            let questionBlock = document.createElement('div');
            questionBlock.className = 'list-group-item';
            this.quizList.append(questionBlock);

            let questionText = document.createElement('p');
            questionText.textContent = `${i}. ${quizQuestion}`;
            questionText.className = 'fw-bold';
            questionBlock.append(questionText);

            i++;
            let j = 1;

            while (true) {
                let quizAnswer = prompt(`Enter answer #${j}`); // вариант ответа

                if(!quizAnswer) break;

                let formCheck = document.createElement('div');
                formCheck.className = 'form-check';
                questionBlock.append(formCheck);

                    let check = document.createElement('input');
                    check.type = 'checkbox';
                    check.id = `answer_${i}.${j}`;
                    check.name = `answer ${i}.${j}`;
                    check.value = `option ${j}`;
                    check.className = 'form-check-input';
                    formCheck.append(check);

                    let label = document.createElement('label');
                    label.setAttribute('for', `answer_${i}.${j}`);
                    label.textContent = quizAnswer;
                    label.className = 'form-check-label';
                    formCheck.append(label);
                j++;
            }
        }

        this.createSubmitButton();
    },

    createSubmitButton : function () {
        this.submitButton = document.createElement('input');
        this.submitButton.type = 'submit';
        this.submitButton.value = 'Check my results';
        this.submitButton.className = 'btn  btn-primary  mt-3  col-12';
        this.quizList.append(this.submitButton);
    }
}

quiz.createQuiz();
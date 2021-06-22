/*------------------------------------*\
 * Скрпт создает объект с [методами], которые будут динамически [генерировать] DOM c тестом,
 *  методы должны храниться в одном объекте.
 *  Изначально на странице усть только `<body>`, вызывая методы объекта нужно создать dom-элементы
\*------------------------------------*/

let quiz = {
    name : 'test name',
    createQuiz : function () {
        let userNameTest = prompt('Enter Quiz name', ''); //название теста
        if (userNameTest) this.name = userNameTest;

        let testHead = document.createElement('h2');
        testHead.textContent = userNameTest;
        document.body.append(testHead);

        let form = document.createElement('form');
        form.action = '/';
        form.method = 'post';

        document.body.append(form);

        let quizList = document.createElement('ol');
        form.append(quizList);

        let i = 1;
        while (true) {
            let quizQuestion = prompt(`Enter question #${i}`);

            if(!quizQuestion) break;

            let li = document.createElement('li');
            li.textContent = quizQuestion;
            i++;
            quizList.append(li);
            li.append(document.createElement('br'));

            let j = 1;

            while (true) {
                let quizAnswer = prompt(`Enter answer #${j}`);

                if(!quizAnswer) break;

                let check = document.createElement('input');
                check.type = 'checkbox';
                check.id = `answer_${i}.${j}`;
                check.name = `answer ${i}.${j}`;
                check.value = `option ${j}`;
                li.append(check);

                let label = document.createElement('label');
                label.setAttribute('for', `answer_${i}.${j}`);
                label.textContent = quizAnswer;
                li.append(label);
                li.append(document.createElement('br'));
                j++;
            }
        }

        let submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'Check my results';

        quizList.after(submit);
    }
}

quiz.createQuiz();
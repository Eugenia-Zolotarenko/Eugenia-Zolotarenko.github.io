$(function (){
    let $quizHtml = $('#quiz').html();

    let quizData = {
        quizName : 'Тест по программированию',
        quizList : [
            {
                quizQuestion : 'question 1',
                options : [
                    'option 1',
                    'option 2',
                    'option 3'
                ]
            },
            {
                quizQuestion : 'question 2',
                options : [
                    'option 1',
                    'option 2',
                    'option 3'
                ]
            },
            {
                quizQuestion : 'question 3',
                options : [
                    'option 1',
                    'option 2',
                    'option 3'
                ]
            }
        ],
    };

    let quizContent = tmpl($quizHtml, quizData);

    //let content = tmpl($quizHtml, quizData);


    $('body').append(quizContent);

});
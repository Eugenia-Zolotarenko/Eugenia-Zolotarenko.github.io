/*
1. Calculate the position of "quizTest.quizList[i].options[?]" from id of checked option: the second number
of id (id='2.3') is needed value (3). Convert string '2.3' to array ['2', '3'] and take the [1] element of array.
 */

$(function (){
    'use strict';

    /*Object for template*/
    let quizData = {
        quizName : 'Тест по программированию',
        quizList : [
            {
                quizQuestion : 'Кто из водителей, участников ДТП, заполняет пункт «Транспортное средство А»' +
                    ' при оформлении Европротокола?',
                options : [
                    {
                        answer: 'Это решают работники полиции',
                        isCorrect: false,
                    },

                    {
                        answer: 'Виновник ДТП',
                        isCorrect: false,
                    },

                    {
                        answer: 'Пострадавший в ДТП',
                        isCorrect: false,
                    },

                    {
                        answer: 'Любой из водителей ТС, ставших участниками ДТП',
                        isCorrect: true,
                    },
                ]

            },

            {
                quizQuestion : 'Какая дистанция должна быть между движущимися колонами велосипедистов?',
                options : [
                    {
                        answer: '10-30м',
                        isCorrect: false,
                    },

                    {
                        answer: '80-100 м',
                        isCorrect: true,
                    },

                    {
                        answer: '150-200 м',
                        isCorrect: false,
                    },
                ]
            },

            {
                quizQuestion : 'Разрешена ли перевозка пассажиров на велосипеде?',
                options : [
                    {
                        answer: 'Разрешена на багажнике',
                        isCorrect: false,
                    },

                    {
                        answer: 'Разрешена на раме велосипеда',
                        isCorrect: false,
                    },

                    {
                        answer: 'Запрещена перевозка пассажиров на велосипеде (за исключением детей до 7 лет' +
                            'перевозимых на дополнительном сидении, оборудованном надежно закрепленными подножками )',
                        isCorrect: true,
                    },
                ]
            }
        ],
    };


    localStorage.setItem('quiz', JSON.stringify(quizData));

    let quizTest = JSON.parse(localStorage.getItem('quiz'));
    let $quizHtml = $('#quiz').html();

   /*Create DOM for test from template*/
    let quizContent = tmpl($quizHtml, quizTest);

    $('body').append(quizContent);

    let $checkResultsButton = $('input[type="button"]');

    $checkResultsButton.on('click', null, quizTest, checkQuiz);

    function checkQuiz (eventObject) {

        let $quiz = $('#js_quiz');
        let $questions = $quiz.find('.list-group-item');
        let $answers = $questions.find('input[type="radio"]:checked');
        let isPassed = true;

        for ( let i = 0; i < $questions.length; i++ ) {

            if ( ! eventObject.data.quizList[i].options[ $answers[i].id.split('.')[1] ].isCorrect ) {  /*[1]*/
                isPassed = false;  break;
            }
        }

        if (isPassed) alert('test Passed'); else alert('test Failed');

        $questions.find('input[type="radio"]').prop('checked', false);

    }

});
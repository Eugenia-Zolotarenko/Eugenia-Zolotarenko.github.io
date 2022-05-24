
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
                        answer: '10-30',
                        isCorrect: false,
                    },

                    {
                        answer: '80-100',
                        isCorrect: true,
                    },

                    {
                        answer: '150-200',
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

    /*Create DOM for quiz from template*/
    createHtmlFromTemplate(quizData, $('#js-quiz'), $('body') );

    let $checkResultsButton = $('#js-check-result');
    let $resetButton = $('#js-reset');

    $checkResultsButton.on('click', null, quizData, checkQuiz);

    $resetButton.on('click', null,  $('#js-form-quiz'),  uncheckRadio );

});


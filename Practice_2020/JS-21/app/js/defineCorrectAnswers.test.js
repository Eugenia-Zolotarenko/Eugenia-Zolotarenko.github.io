
const defineCorrectAnswers = require('./defineCorrectAnswers.js');

describe('defineCorrectAnswersArray', () => {

    test('should return array [3,1,2]', () => {
        let Data = {
            quizName : 'Тест по программированию',
            quizList : [
                {
                    quizQuestion : '?',
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
                            answer: 'Allowed ',
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

        expect(defineCorrectAnswers(Data)).toEqual([3,1,2]);

    });


    test('should return array [3,2,2], when there are all answers correct', () => {
        let Data = {
            quizName : 'Тест по программированию',
            quizList : [
                {
                    quizQuestion : '?',
                    options : [
                        {
                            answer: 'Это решают работники полиции',
                            isCorrect: true,
                        },

                        {
                            answer: 'Виновник ДТП',
                            isCorrect: true,
                        },

                        {
                            answer: 'Пострадавший в ДТП',
                            isCorrect: true,
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
                            isCorrect: true,
                        },

                        {
                            answer: '80-100 м',
                            isCorrect: true,
                        },

                        {
                            answer: '150-200 м',
                            isCorrect: true,
                        },
                    ]
                },

                {
                    quizQuestion : 'Разрешена ли перевозка пассажиров на велосипеде?',
                    options : [
                        {
                            answer: 'Allowed ',
                            isCorrect: true,
                        },

                        {
                            answer: 'Разрешена на раме велосипеда',
                            isCorrect: true,
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

        expect(defineCorrectAnswers(Data)).toEqual([3,2,2]);

    });

    test('should return array [], when there is no any correct answers', () => {
        let Data = {
            quizName : 'Тест по программированию',
            quizList : [
                {
                    quizQuestion : '?',
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
                            isCorrect: false,
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
                            isCorrect: false,
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
                            answer: 'Allowed ',
                            isCorrect: false,
                        },

                        {
                            answer: 'Разрешена на раме велосипеда',
                            isCorrect: false,
                        },

                        {
                            answer: 'Запрещена перевозка пассажиров на велосипеде (за исключением детей до 7 лет' +
                                'перевозимых на дополнительном сидении, оборудованном надежно закрепленными подножками )',
                            isCorrect: false,
                        },
                    ]
                }
            ],
        };

        expect(defineCorrectAnswers(Data)).toEqual([]);

    });
})


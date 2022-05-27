// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
//
// const defineUsersAnswers = require('../defineUsersAnswers.js');
//
// // console.log(dom.window.document.getElementById("paragraph").textContent);
//
// describe('defineUsersAnswers after', () => {
//
//     //beforeEach(() => {
//     test('should return array [3,1,2]', () => {
//         const dom = new JSDOM(`<!DOCTYPE html>
//           <body>
//             <div class="row  justify-content-center">
//               <h2 class="col-10  display-5  offset-md-3">Тест по программированию</h2>
//                 <div class="w-100"></div>
//                   <form action="/" method="post" name="quiz" class="col-auto  col-md-6  mt-3  list-group" id="js-form-quiz">
//                     <div class="list-group-item" id="js_quizQuestion_0">
//                       <p class="fw-bold" id="paragraph">Question One?</p>
//                       <div class="form-check">
//                           <input type="radio" id="0.0" name="answer_0" value="0" class="form-check-input">
//                           <label for="0.0" class="form-check-label">Это решают работники полиции</label>
//                       </div>
//                       <div class="form-check">
//                          <input type="radio" id="0.1" name="answer_0" value="1" class="form-check-input">
//                          <label for="0.1" class="form-check-label">Виновник ДТП </label>
//                       </div>
//                       <div class="form-check">
//                           <input type="radio" id="0.2" name="answer_0" value="2" class="form-check-input">
//                           <label for="0.2" class="form-check-label">Пострадавший в ДТП</label>
//                       </div>
//                       <div class="form-check">
//                           <input type="radio" id="0.3" name="answer_0" value="3" class="form-check-input" >
//                           <label for="0.3" class="form-check-label">Любой из водителей ТС, ставших участниками ДТП</label>
//                       </div>
//                     </div>
//
//                     <div class="list-group-item" id="js_quizQuestion_1">
//                       <p class="fw-bold">Какая дистанция должна быть между движущимися колонами велосипедистов?</p>
//                       <div class="form-check">
//                         <input type="radio" id="1.0" name="answer_1" value="0" class="form-check-input">
//                         <label for="1.0" class="form-check-label">10-30</label>
//                       </div>
//                       <div class="form-check">
//                         <input type="radio" id="1.1" name="answer_1" value="1" class="form-check-input">
//                         <label for="1.1" class="form-check-label">80-100</label>
//                       </div>
//                       <div class="form-check">
//                         <input type="radio" id="1.2" name="answer_1" value="2" class="form-check-input">
//                         <label for="1.2" class="form-check-label">150-200</label>
//                       </div>
//                       </div>
//
//                     <div class="list-group-item" id="js_quizQuestion_2">
//                       <p class="fw-bold">Разрешена ли перевозка пассажиров на велосипеде?</p>
//                       <div class="form-check">
//                         <input type="radio" id="2.0" name="answer_2" value="0" class="form-check-input">
//                         <label for="2.0" class="form-check-label">Разрешена на багажнике</label>
//                       </div>
//                       <div class="form-check">
//                         <input type="radio" id="2.1" name="answer_2" value="1" class="form-check-input">
//                         <label for="2.1" class="form-check-label">Разрешена на раме велосипеда</label>
//                       </div>
//                       <div class="form-check">
//                         <input type="radio" id="2.2" name="answer_2" value="2" class="form-check-input" >
//                         <label for="2.2" class="form-check-label">Запрещена перевозка пассажиров на велосипеде
//                          (за исключением детей до 7 летперевозимых на дополнительном сидении, оборудованном надежно
//                           закрепленными подножками )</label>
//                         </div>
//                       </div>
//
//                     <input type="button" value="Reset" class="btn  btn-primary  mt-3  col-12" id="js-reset">
//                     <input type="button" value="Check my results" class="btn  btn-primary  mt-3  col-12" id="js-check-result">
//                   </form>
//             </div>
//             <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
//             <script src="../defineUsersAnswers.js">
//           </body>`, {
//             runScripts: "dangerously",
//             resources: "usable"
//         });
//     //});
//
//         dom.window.document.getElementById('0.3').checked = true;
//         dom.window.document.getElementById('1.1').checked = true;
//         dom.window.document.getElementById('2.2').checked = true;
//
//         // console.log(dom.window.document.getElementById('0.3').checked);
//
//         console.log('444', ddd(dom));
//
//
//         //let result = window.eval(defineUsersAnswers());
//
//
//         expect(defineUsersAnswers()).toEqual([3,1,2]);
//
//     });
//
//
//     // __test__('should return array [3,2,2], when there are all answers correct', () => {
//     //     let Data = {
//     //         quizName : 'Тест по программированию',
//     //         quizList : [
//     //             {
//     //                 quizQuestion : '?',
//     //                 options : [
//     //                     {
//     //                         answer: 'Это решают работники полиции',
//     //                         isCorrect: true,
//     //                     },
//     //
//     //                     {
//     //                         answer: 'Виновник ДТП',
//     //                         isCorrect: true,
//     //                     },
//     //
//     //                     {
//     //                         answer: 'Пострадавший в ДТП',
//     //                         isCorrect: true,
//     //                     },
//     //
//     //                     {
//     //                         answer: 'Любой из водителей ТС, ставших участниками ДТП',
//     //                         isCorrect: true,
//     //                     },
//     //                 ]
//     //
//     //             },
//     //
//     //             {
//     //                 quizQuestion : 'Какая дистанция должна быть между движущимися колонами велосипедистов?',
//     //                 options : [
//     //                     {
//     //                         answer: '10-30м',
//     //                         isCorrect: true,
//     //                     },
//     //
//     //                     {
//     //                         answer: '80-100 м',
//     //                         isCorrect: true,
//     //                     },
//     //
//     //                     {
//     //                         answer: '150-200 м',
//     //                         isCorrect: true,
//     //                     },
//     //                 ]
//     //             },
//     //
//     //             {
//     //                 quizQuestion : 'Разрешена ли перевозка пассажиров на велосипеде?',
//     //                 options : [
//     //                     {
//     //                         answer: 'Allowed ',
//     //                         isCorrect: true,
//     //                     },
//     //
//     //                     {
//     //                         answer: 'Разрешена на раме велосипеда',
//     //                         isCorrect: true,
//     //                     },
//     //
//     //                     {
//     //                         answer: 'Запрещена перевозка пассажиров на велосипеде (за исключением детей до 7 лет' +
//     //                             'перевозимых на дополнительном сидении, оборудованном надежно закрепленными подножками )',
//     //                         isCorrect: true,
//     //                     },
//     //                 ]
//     //             }
//     //         ],
//     //     };
//     //
//     //     expect(defineCorrectAnswers(Data)).toEqual([3,2,2]);
//     //
//     // });
//     //
//     // __test__('should return array [], when there is no any correct answers', () => {
//     //     let Data = {
//     //         quizName : 'Тест по программированию',
//     //         quizList : [
//     //             {
//     //                 quizQuestion : '?',
//     //                 options : [
//     //                     {
//     //                         answer: 'Это решают работники полиции',
//     //                         isCorrect: false,
//     //                     },
//     //
//     //                     {
//     //                         answer: 'Виновник ДТП',
//     //                         isCorrect: false,
//     //                     },
//     //
//     //                     {
//     //                         answer: 'Пострадавший в ДТП',
//     //                         isCorrect: false,
//     //                     },
//     //
//     //                     {
//     //                         answer: 'Любой из водителей ТС, ставших участниками ДТП',
//     //                         isCorrect: false,
//     //                     },
//     //                 ]
//     //
//     //             },
//     //
//     //             {
//     //                 quizQuestion : 'Какая дистанция должна быть между движущимися колонами велосипедистов?',
//     //                 options : [
//     //                     {
//     //                         answer: '10-30м',
//     //                         isCorrect: false,
//     //                     },
//     //
//     //                     {
//     //                         answer: '80-100 м',
//     //                         isCorrect: false,
//     //                     },
//     //
//     //                     {
//     //                         answer: '150-200 м',
//     //                         isCorrect: false,
//     //                     },
//     //                 ]
//     //             },
//     //
//     //             {
//     //                 quizQuestion : 'Разрешена ли перевозка пассажиров на велосипеде?',
//     //                 options : [
//     //                     {
//     //                         answer: 'Allowed ',
//     //                         isCorrect: false,
//     //                     },
//     //
//     //                     {
//     //                         answer: 'Разрешена на раме велосипеда',
//     //                         isCorrect: false,
//     //                     },
//     //
//     //                     {
//     //                         answer: 'Запрещена перевозка пассажиров на велосипеде (за исключением детей до 7 лет' +
//     //                             'перевозимых на дополнительном сидении, оборудованном надежно закрепленными подножками )',
//     //                         isCorrect: false,
//     //                     },
//     //                 ]
//     //             }
//     //         ],
//     //     };
//     //
//     //     expect(defineCorrectAnswers(Data)).toEqual([]);
//     //
//     // });
// })
//
// const ddd = (dom) => dom.window.document.getElementById('0.3').checked;
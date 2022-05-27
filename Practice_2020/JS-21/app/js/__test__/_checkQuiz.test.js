//const defineCorrectAnswers = require('../defineCorrectAnswers.js');
const defineUsersAnswers = require('../defineUsersAnswers.js')
const checkQuiz = require('../checkQuiz.js');

//const DefineCorrectAnswers = jest.fn( () => [3,2,1] );
const mockDefineUsersAnswers   = require('../defineUsersAnswers.js');
//const defineCorrectAnswers = require('../defineCorrectAnswers.js');
// jest.mock('../defineCorrectAnswers.js');
// jest.mock('../defineUsersAnswers.js');
//
// jest.mock('../defineCorrectAnswers.js', () => ({
//     defineCorrectAnswers: jest.fn(() => [3,2,1])
// }));
// jest.mock('../defineUsersAnswers.js', () => ([3,2,1]));



//mockDefineCorrectAnswers.mockResolvedValue('[3,2,1]');
//mockDefineUsersAnswers.mockReturnValue([3, 1 ,2]);

//console.log(mockDefineCorrectAnswers.mockReturnValue([3, 1 ,2]));



describe('checkQuiz', () => {
    test('should compare two arrays [3,1,2] and returned true ', () => {
        const defineUsersAnswers = jest.fn( () => [3,2,1]);
        //defineCorrectAnswers.mockReturnValue([3,2,1]);
        //jest.spyOn(defineCorrectAnswers, 'defineCorrectAnswers').mockReturnValue([3, 1 ,2]);
        const result = checkQuiz({});
        expect(result).toBeTruthy();

    });

});
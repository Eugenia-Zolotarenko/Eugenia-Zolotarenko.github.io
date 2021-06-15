/*------------------------------------*\
 * функция pow возводит указанное число в указанную степень.
 * Работает с целыми числами, большими, меньшими, и равными нулю.
 * Бесконечности не обрабатывает
 * Результат выполнения функции выводится в консоль

\*------------------------------------*/


let x = +prompt("x?", '');
let n = +prompt("n?", '');

if ( !Number.isInteger(n) || !Number.isInteger(x) ) {
    alert( "используйте целые числа");
} else {
    console.log( `${x} в степени ${n} =`, pow(x, n) );
}

function pow(x, n) {
    let result = x;

    switch (true) {
        case n === 0:
            return  1;

        case n > 0:
            for (let i = 1; i < n; i++) {
                result *= x;
            }

            return result;

        case n < 0:
            for (let i = 1; i < -n; i++) {
                result *= x;
            }

            return  1/result;
    }
}
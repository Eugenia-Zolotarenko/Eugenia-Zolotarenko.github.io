function pow (x,n) {

    var result = x;

    switch (true) {
        case (n === 0):
            result = 1;
            break;
            
        case (n > 0):
            for ( var i=1; i < n; i++) {
            result *= x;
            }
            break;

        case (n < 0):
            for ( var i = 1; i < -n; i++) {
                result *= x;
            }
            result = '1/' + result;
            break;

        default:
            result = 'something is wrong';
    }

    return result;
}

var x = +prompt('Enter Number', ''),
    n = +prompt('Enter stepen', '');

//var y = pow(x,n);

alert (pow(x,n));



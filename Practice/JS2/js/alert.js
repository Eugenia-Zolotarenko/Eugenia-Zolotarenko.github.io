var users = [];

for (var i =0 ; i < 5; i++) {
    users[i] = prompt('Enter name','');
}

var userName = prompt('Enter your name', '');


for (var i =0 ; i < 5; i++) {
    if ( users[i] == userName ) {
        alert( userName + ', вы успешно вошли' );
        break;
    }

    alert('Error');
    break;
}

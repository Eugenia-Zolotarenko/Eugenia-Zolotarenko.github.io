var users = [];

for (var i =0 ; i < 5; i++) {
    users[i] = prompt('Enter name','');
}

var userName = prompt('Enter your name', '');

function isUserNameInUsers (userName) {
    for (var i =0 ; i < 5; i++) {
        return users[i].toLowerCase() == userName.toLowerCase();
    }
}

if ( users.some(isUserNameInUsers) ) {
    alert(userName + ', вы успешно вошли');
} else {
    alert('Error');
}


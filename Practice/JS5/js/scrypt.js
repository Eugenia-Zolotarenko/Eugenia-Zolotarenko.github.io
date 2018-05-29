
var hour =  document.getElementById('hour').innerHTML = '00';
var minute =  document.getElementById('minute').innerHTML = '00';
var second = document.getElementById('second').innerHTML = '00';
var millisecond =  document.getElementById('millisecond').innerHTML = '000';

function timerGo() {
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    second = document.getElementById('second').innerHTML = second;
    document.getElementById('millisecond').innerHTML = millisecond;

    if (millisecond > 99) { second++;
        millisecond = 0;}
    if (minute > 59) { hour++;
        minute = 0;}
    millisecond++;
}


function timerStart() {
    idStartInt = setInterval(timerGo, 10);
}

var start = document.getElementById("start");
var pause = document.getElementById("pause");
var contin = document.getElementById("continue");
var clear = document.getElementById("clear");

function heandlerStart () {
    start.style.display = "none";
    pause.style.display = "block";
    timerStart();
}

function heandlerPause () {
    contin.style.display = "block";
    pause.style.display = "none";
    clearInterval(idStartInt);
}

function heandlerContinue () {
    contin.style.display = "none";
    pause.style.display = "block";
    timerStart();
}

function heandlerClear () {
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('minute').innerHTML = '00';
    second = document.getElementById('second').innerHTML = '00';
    document.getElementById('millisecond').innerHTML = '000';

    contin.style.display = "none";
    pause.style.display = "none";
    start.style.display = "block";
    clearInterval(idStartInt);
}

start.addEventListener('click', heandlerStart);
pause.addEventListener('click', heandlerPause);
contin.addEventListener('click', heandlerContinue);
clear.addEventListener('click', heandlerClear);

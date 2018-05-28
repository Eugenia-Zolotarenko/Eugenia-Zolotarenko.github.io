var time = document.getElementById("siteTimer");
var mlsec = document.getElementById("timer__mlsec");


function myTimer() {
     siteTimer = new Date(); //создаём объект Date()
    siteTimer.setHours(0, 0, 0, 0);

     hour = siteTimer.getHours(); //получаем часы
     minute = siteTimer.getMinutes(); //получаем минуты
     second = siteTimer.getSeconds(); //получаем секунды
     millisecond = siteTimer.getMilliseconds();
    //В следующих трех строках проверяем, если число (часы, минуты, секунды) меньше 10,
    // то выводим 0 перед числом (для красоты)
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
    if (millisecond < 10) millisecond = "00" + millisecond;
    if (millisecond < 100 & millisecond > 10) millisecond = "0" + millisecond;

    //Находим на странице элемент с id = siteTime и внутрь него записываем время сайта
    time.innerHTML = hour + ":" + minute + ":" + second;
    mlsec.innerHTML =  millisecond;
}

function timerStart() {
    millisecond = 0;

    idStartInt = setInterval(function() {

        //Находим на странице элемент с id = siteTime и внутрь него записываем время сайта

         time.innerHTML = hour + ":" + minute + ":" + second;
         mlsec.innerHTML =  millisecond;

        if (millisecond > 99) { second++;
                                 millisecond = 0;}


        if (second > 59) { minute++;
            second = 0;}

        if (minute > 59) { hour++;
            minute = 0;}

        millisecond++;
    }, 10);
}


function timerContinue() {

    idContinueInt = setInterval(function() {

        //Находим на странице элемент с id = siteTime и внутрь него записываем время сайта

        time.innerHTML = hour + ":" + minute + ":" + second;
        mlsec.innerHTML =  millisecond;

        if (millisecond > 99) { second++;
            millisecond = 0;}


        if (second > 59) { minute++;
            second = 0;}

        if (minute > 59) { hour++;
            minute = 0;}

        millisecond++;
    }, 10);
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
    clearInterval(idContinueInt);
}

function heandlerContinue () {
    contin.style.display = "none";
    pause.style.display = "block";
    timerContinue();
}

function heandlerClear () {
    clearInterval(idStartInt);
    clearInterval(idContinueInt);
    contin.style.display = "none";
    pause.style.display = "none";
    start.style.display = "block";
    myTimer();
}


myTimer ();
start.addEventListener('click', heandlerStart);
pause.addEventListener('click', heandlerPause);
contin.addEventListener('click', heandlerContinue);
clear.addEventListener('click', heandlerClear);

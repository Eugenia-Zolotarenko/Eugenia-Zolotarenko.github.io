

function myTimer() {
    var siteTimer = new Date(); //создаём объект Date()
    siteTimer.setHours(0, 0, 0, 0);

    var hour = siteTimer.getHours(); //получаем часы
    var minute = siteTimer.getMinutes(); //получаем минуты
    var second = siteTimer.getSeconds(); //получаем секунды
    var millisecond = siteTimer.getMilliseconds();
    //В следующих трех строках проверяем, если число (часы, минуты, секунды) меньше 10,
    // то выводим 0 перед числом (для красоты)
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
    if (millisecond < 10) millisecond = "00" + millisecond;
    if (millisecond < 100 & millisecond > 10) millisecond = "0" + millisecond;

    //Находим на странице элемент с id = siteTime и внутрь него записываем время сайта
    document.getElementById("siteTimer").innerHTML = hour + ":" + minute + ":" + second;
    document.getElementById("timer__mlsec").innerHTML =  millisecond;
}

function timerStart() {
    millisecond = 0;
    var siteTimer = new Date(); //создаём объект Date()
    siteTimer.setHours(0, 0, 0, 0);

    var hour = siteTimer.getHours(); //получаем часы
    var minute = siteTimer.getMinutes(); //получаем минуты
    var second = siteTimer.getSeconds(); //получаем секунды
    var millisecond = siteTimer.getMilliseconds();
    //В следующих трех строках проверяем, если число (часы, минуты, секунды) меньше 10,
    // то выводим 0 перед числом (для красоты)
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
    if (millisecond < 10) millisecond = "00" + millisecond;
    if (millisecond < 100 & millisecond > 10) millisecond = "0" + millisecond;

    var idInt = setInterval(function() {

        //Находим на странице элемент с id = siteTime и внутрь него записываем время сайта
        document.getElementById("siteTimer").innerHTML = hour + ":" + minute + ":" + second;
        document.getElementById("timer__mlsec").innerHTML =  millisecond;
        if (millisecond > 999) { second++;
                                 millisecond = 0;}




        millisecond++;



    }, 1);
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
}

function heandlerContinue () {
    contin.style.display = "none";
    pause.style.display = "block";
}

function heandlerClear () {
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

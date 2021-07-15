/*
*Таймер Stop Watch:
  1. Кнопка Start запускает таймер, так же нужно выводить милисекунды.
  * После запуска она меняется на кнопку Pause, которая может приостанавливать таймер.
  2. Кнопка Clear останавливает и обнуляет таймер.

* [1]. Set default values of hours, minutes, seconds, milliseconds.
* [2]. Formats time: two numbers for hours, minutes, seconds, three numbers for milliseconds.
*
* */



let hour =  document.getElementById('hour').textContent = '00';  //[1]
let minute =  document.getElementById('minute').textContent = '00';
let second = document.getElementById('second').textContent = '00';
let millisecond =  document.getElementById('millisecond').textContent = '000';

let start = document.getElementById('start');

class Timer {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    timerGo() {
        document.getElementById('hour').textContent = ('0' + hour).slice(-2);      //[2]
        document.getElementById('minute').textContent = ('0' + minute).slice(-2);
        document.getElementById('second').textContent = ('0' + second).slice(-2);
        document.getElementById('millisecond').textContent = ('00' + millisecond).slice(-3);


        if (millisecond > 99) {
            second++;
            millisecond = 0;
        }

        if (second > 59) {
            minute++;
            second = 0;
        }

        if (minute > 59) {
            hour++;
            minute = 0;
        }

        millisecond++;
    }


    start() {
        this.timerId = setInterval(this.timerGo, 10);
        start.dataset.action = 'pause';
        start.textContent = 'Pause';
    }

    pause() {
        clearInterval(this.timerId);
        start.dataset.action = 'continue';
        start.textContent = 'Continue';
    }

    continue() {
        this.start();
    }

    clear() {
        clearInterval(this.timerId);

        document.getElementById('hour').textContent = '00';
        document.getElementById('minute').textContent = '00';
        document.getElementById('second').textContent = '00';
        document.getElementById('millisecond').textContent = '000';

        start.dataset.action = 'start';
        start.textContent = 'Start';
    }


    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

new Timer(timerControls);
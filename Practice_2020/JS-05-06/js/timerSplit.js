/*
*Таймер Stop Watch Split:
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



class Timer {
    splitPointNumber = 1;
    startButton = document.getElementById('start');

    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    timerGo() {
        document.getElementById('hour').textContent = ('0' + hour).slice(-2);      //[2]
        document.getElementById('minute').textContent = ('0' + minute).slice(-2);
        document.getElementById('second').textContent = ('0' + second).slice(-2);
        document.getElementById('millisecond').textContent = ('0' + millisecond).slice(-2);

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
        this.startButton.dataset.action = 'stop';
        this.startButton.textContent = 'Stop';
    }

    split() {
        let splitPoint = document.createElement('div');
        splitPoint.textContent = `Split ${this.splitPointNumber}: ${('0' + hour).slice(-2)}:${('0' + minute).slice(-2)}:${('0' + second).slice(-2)}  (${('0' + millisecond).slice(-2)})`;
        document.getElementById('splitResults').append(splitPoint);

        this.splitPointNumber++;
    }

    stop() {
        let stopPoint = document.createElement('div');
        stopPoint.textContent = `Stop: ${('0' + hour).slice(-2)}:${('0' + minute).slice(-2)}:${('0' + second).slice(-2)}  (${('0' + millisecond).slice(-2)})`;
        document.getElementById('splitResults').append(stopPoint);

        clearInterval(this.timerId);
    }

    reset() {
        clearInterval(this.timerId);

        hour = document.getElementById('hour').textContent = '00';
        minute = document.getElementById('minute').textContent = '00';
        second = document.getElementById('second').textContent = '00';
        millisecond = document.getElementById('millisecond').textContent = '000';

        this.startButton.dataset.action = 'start';
        this.startButton.textContent = 'Start';
        this.splitPointNumber = 1;
        document.getElementById('splitResults').innerHTML = '';
    }


    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

new Timer(timerControls);
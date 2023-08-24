let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;
let cron;

function start () {
    pause();
    cron = setInterval(() => { timer(); },10);
}

function pause () {
    clearInterval(cron);
}

function timer () {
    if((milisecond += 10) == 1000) {
        milisecond = 0;
        second++;
    }
    if (second == 60){
        second = 0;
        minute++
    }
    if (minute == 60){
        minute = 0;
        hour++
    }
    document.getElementById("hour").innerText = returnData(hour);
    document.getElementById("minute").innerText = returnData(minute);
    document.getElementById("second").innerText = returnData(second);
}

function reset(){
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById("hour").innerText = '00';
    document.getElementById("minute").innerText = '00';
    document.getElementById("second").innerText = '00';
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}
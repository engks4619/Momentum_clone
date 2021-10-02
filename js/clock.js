const clock = document.querySelector(".clock-box");
const hourMinute = clock.querySelector(".hour-minute");
const second = clock.querySelector(".second");
const dateBox = document.querySelector(".date-box");
const ymdd = dateBox.querySelector(".year-month-date-day");

const WEEK = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

function getClock(){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth()+1).padStart(2,"0");
    const date = String(now.getDate()).padStart(2,"0");
    const day = WEEK[now.getDay()];
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    hourMinute.innerText = `${hours}:${minutes}`;
    second.innerText = `${seconds}`;
    ymdd.innerText = `${year}.${month}.${date} ${day}`;
}

getClock();
setInterval(getClock, 1000);



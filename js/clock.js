const clock = document.querySelector(".clock-box");
const hourMinute = clock.querySelector(".hour-minute");
const second = clock.querySelector(".second");
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    hourMinute.innerText = `${hours}:${minutes}`;
    second.innerText = `${seconds}`;
}

getClock();
setInterval(getClock, 1000);



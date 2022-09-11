const clock = document.querySelector(".time");
const Seconds = document.querySelector(".timeSeconds");
const fullDate = document.querySelector(".date");
const date = new Date();


function getClock() {
    const today=new Date();
    const hours = String(today.getHours()).padStart(2,"0");
    const minutes = String(today.getMinutes()).padStart(2,"0");
    const seconds = String(today.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hours}:${minutes}`;
    Seconds.innerText = `${seconds}`;
}

getClock();
setInterval(getClock,1000);

function active() {
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const Date = String(date.getDate());

    fullDate.innerText = `${year}.${month}.${Date}`;
}

active();

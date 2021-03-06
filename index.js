const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secondsElement = document.getElementById("seconds");
let eventDate;
document.querySelector("button").addEventListener("click", function() {
     eventDate = document.getElementById("date").value;
     eventName = document.getElementById("event").value;
     document.getElementById("event-name").innerText = eventName;
     document.querySelector(".input-container").style.visibility = "hidden";
     //document.querySelector(".countdown-container").style.marginTop = "-50px";
     document.getElementById("event-name").style.marginTop = "-60px";

    });

function countdown() {
    const newYearsDate = new Date(eventDate);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
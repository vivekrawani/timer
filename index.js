const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secondsElement = document.getElementById("seconds");
let eventDate;
let eventName;
document.querySelector("button").addEventListener("click", function () {
    eventDate = document.getElementById("date").value;
    eventName = document.getElementById("event").value;
    document.getElementById("event-name").innerText = eventName;
    document.querySelector(".input-container").style.visibility = "hidden";

    document.getElementById("event-name").style.marginTop = "-60px";
    document.querySelector(".countdown-container").style.visibility = "visible";
    const newYearsDate = new Date(eventDate);
    const currentDate = new Date();
    if (currentDate > newYearsDate) {
        alert("Warning danger you have not filled everything");
        location.reload();

    }
    else {
        countdown();

        setInterval(countdown, 1000);

    }


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

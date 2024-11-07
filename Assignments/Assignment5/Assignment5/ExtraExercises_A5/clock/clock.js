"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm = "am";

    if (hours > 12) {
        ampm = "pm"
        hours -=12
    } else if (hours == 12) {
        ampm = "pm"
    } else if (hours == 0) {
        hours = 12;
    };

    $("#hours").textContent = padSingleDigit(hours);
    $("#minutes").textContent = padSingleDigit(minutes);
    $("#seconds").textContent = padSingleDigit(seconds);
    $("#ampm").textContent = ampm
};

document.addEventListener("DOMContentLoaded", () => {
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
});
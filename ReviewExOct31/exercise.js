"use strict";

const $ = selector => document.querySelector(selector);

let timer = null;

document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let counter = 1;

    $("#toggle_show").addEventListener("click", () => {
        if (timer == null) {
            timer = setInterval( () => {
                counter += 1;
                $("#number").textContent = counter;
            }, 1000)

            $("#toggle_show").textContent = "stop";
        }
        else {
            clearInterval(timer);
            timer = null;
            $("#toggle_show").textContent = "start";
        }
    })
})
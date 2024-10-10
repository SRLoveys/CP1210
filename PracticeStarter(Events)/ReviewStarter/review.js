"use strict";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#practiceButton").addEventListener( "click", () => {
        const today = new Date();
        const year = today.getFullYear();

        let day = today.getDay().toString();
        if (day.length == 1) {
            day = "0" + day;
        }

        let month = today.getMonth() + 1;
        month=month.toString();
        if (month.length == 1) {
            month = "0" + month;
        }

        const dateString = `${year}**${month}**${day}`;
        alert(dateString);
    })
    document.querySelector("#firstName").addEventListener( "dblclick", (event) => {
        event.currentTarget.value = "";
        // document.querySelector("#firstName").value = "";
    })
})
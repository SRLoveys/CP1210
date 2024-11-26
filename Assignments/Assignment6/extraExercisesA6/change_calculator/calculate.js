"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        if (isNaN($("#cents").value) || parseInt($("#cents").value) < 0 || parseInt($("#cents").value) > 99) {
            alert("Please enter a valid number 0-99")
            return;
        } 

        let cents = $("#cents").value;
        let quarters = 0;
        let dimes = 0;
        let nickels = 0;
        let pennies = 0;

        while (cents > 0) {
            if (cents >= 25) { 
                quarters = Math.floor(cents / 25);
                cents %= 25;
            } else if (cents >= 10) {
                dimes = Math.floor(cents / 10);
                cents %= 10;
            } else if (cents >= 5) {
                nickels = Math.floor(cents / 5);
                cents %= 5
            } else {
                pennies = cents;
                cents = 0;
            }
        }
        $("#quarters").value = quarters;
        $("#dimes").value = dimes;
        $("#nickels").value = nickels;
        $("#pennies").value = pennies;

    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method
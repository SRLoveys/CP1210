const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const cents = parseInt($("#cents").value);
    if (isNaN(cents) || cents < 0 || cents > 99) {
        alert("Cents must be a number between 0-99");
        $("#cents").focus();
    }
    else {
        makeChange(cents)
    }
}

function makeChange(cents) {
    const quarters = 0;
    const dimes = 0;
    const nickles = 0;
    const pennies = 0;
    while (cents > 0) {
        if (cents >= 25) {
            quarters++;
            cents - 25;
        }
        else if (cents <= 24 && cents >= 10) {
            dimes++;
            cents - 10;
        }
        else if (cents <= 9 && cents >= 5) {
            nickles++;
            cents - 5
        }
        else if (cents <= 4) {
            pennies = cents
        }
    }
    $("#quarters").value = quarters;
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
})
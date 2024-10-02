"use strict";

const arrayOfNumbers = [];
let number = 0;
let sum = 0;
let oddNumber = [];

do {
    number = parseInt(prompt("Enter a number, enter -999 to exit: "));

    if (isNaN(number)) {
        alert("Please enter a valid number")
    }
    else if (number != - 999) {
        arrayOfNumbers[arrayOfNumbers.length] = number;
    }
}
while (number != -999);

for ( let i in arrayOfNumbers) {
    sum += arrayOfNumbers[i];
}
document.write(`<p>The total is: ${sum}</p>`);

for (let odd of arrayOfNumbers) {
    if (odd % 2 != 0) {
        oddNumber[oddNumber.length] = odd
    }
}
document.write(`<p>The odd numbers are: ${oddNumber}</p>`);

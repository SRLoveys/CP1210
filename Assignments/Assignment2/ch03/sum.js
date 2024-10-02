"use strict";

let userInput = 0;
let again = "y"
let total = 0;

do {
    do {
        userInput = parseInt(prompt("Enter any top number to sum\nfrom 1 through 100"))
        if (userInput < 1 || userInput > 100) {
            alert("Please enter a number between 1 and 100");
        }
        else if (userInput < 101 && userInput > 0) {
            again = prompt("Do another sum? (y/n)", "y")
        }
    }
    while (isNaN(userInput));
    
    for (let i = 1; i <= userInput; i++) {
        total += i;
    }
    document.write(`<p>The sum of the numbers from 1 through ${userInput} is ${total}</p>`);
}
while(again == "y");

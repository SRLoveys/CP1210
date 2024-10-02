// "use strict";

// let secretNumber = 4;
// const choices = [];
// let number = 0;
// do {
//     number = parseInt(
//         prompt("Enter a number: "));

//     if (number > 0 && number <= 10) {
//         choices[choices.length] = number;
//     }
//     else {
//         alert("Please enter a valid number")
//     }
// }
// while (isNaN(number) || number <= 0 || number > 10 || number != secretNumber);

// alert(`Congratulations you guessed it in ${choices.length} guesses!`)
// document.write(`Congratulations you guessed it in ${choices.length} guesses!`)

"use strict";

const choices = [];
let number = 0;
do {
    number = parseInt(
        prompt("Enter a number: "));

    if (number > 0 && number <= 10) {
        choices[choices.length] = number;
    }
    else if (number != 4) {
        alert("Please enter a valid number 1 - 10")
    }
}
while (number != 4);

alert(`Congratulations you guessed it in ${choices.length} guesses!`)
document.write(`Congratulations you guessed it in ${choices.length} guesses!`)

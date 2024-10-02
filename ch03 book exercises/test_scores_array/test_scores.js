"use strict";

const scores = [];

// use do-while loop to get the scores from the user
let number = 0;
do {
    number = parseInt(
        prompt("Enter a test score, or enter -1 to end scores", -1));

    if (number >= 0 && number <= 100) {
        scores[scores.length] = number;
    }
    else if (number != -1){
        alert("Score must by a valid number from 0 through 100");
    }
}
while(number != -1);

if (scores.length > 0) {
    // use a for-in loop to add each score to total, and display score
    let total = 0;
    for (let i in scores) {
        total = total + scores[i];
        document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
    }

    //calculate and display the average
    const average = parseInt(total/scores.length);
    document.write(`<p>Average score is ${average}</p>`);
}
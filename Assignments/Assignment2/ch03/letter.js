"use strict;"

let grade = 0;
const gradeGroup = [];

do {
    grade = parseInt(prompt("Enter number grade from 0 through 100\nOr enter 999 to end entries"));
    if (grade <= 100 && grade >= 0) {
        gradeGroup[gradeGroup.length] = grade;
    }
}
while (grade != 999 || isNaN(grade));

if (gradeGroup.length > 0) {
    for (let i of gradeGroup) {
        let letter = "";
        if (i <= 100 && i >= 88) {
            letter = "A"
        }
        else if (i <= 87 && i >= 80) {
            letter = "B"
        }
        else if (i <= 79 && i >= 68) {
            letter = "C"
        }
        else if (i <= 67 && i >= 60) {
            letter = "D"
        }
        else if (i < 60) {
            letter = "F"
        }
        document.write(`<p>Grade ${i} = ${letter}</p>`)
    }
}

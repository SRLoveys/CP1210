"use strict";

// Get degrees in Fahrenheit
const tempFahr = parseFloat(prompt("Enter Fahrenheit temperature"));

// Convert to Celsius
const fahrToCel = parseFloat((tempFahr-32) * (5/9));

const html=
    `${tempFahr.toFixed(1)} F = ${fahrToCel.toFixed(1)} C`

document.write(html)
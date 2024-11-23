"use strict"

const $ = (selector) => document.querySelector(selector);

const verifyInfo = () => {
    if ($("#email_address1").value == "") {
        $("#email_address1").nextElementSibling.firstChild.nodeValue = "Invalid email"
    } else if ($("#password").value == "") {
        $("#password").nextElementSibling.firstChild.nodeValue = "Invalid password"
    } else if ($("#robot").checked == false) {
        $("#robot").nextElementSibling.firstChild.nodeValue = "Need to Check box"
    } else {
        $("#email_form").submit()
    }
}

const resetForm = () => {
    $("#email_address1").nextElementSibling.firstChild.nodeValue = "*";
    $("#password").nextElementSibling.firstChild.nodeValue = "*";
    $("#robot").nextElementSibling.firstChild.nodeValue = "*";
}

document.addEventListener("DOMContentLoaded", () => {
   $("#login").addEventListener("click", verifyInfo);
   $("#resetButton").addEventListener("click", resetForm);
});
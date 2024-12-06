"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded",  () => {

	const email = sessionStorage.getItem("email");
    const phone = sessionStorage.getItem("phone");
    const zip = sessionStorage.getItem("zip");
    const dob = sessionStorage.getItem("dob");

	$("#email").textContent = email;
	$("#phone").textContent = phone;
	$("#zip").textContent = zip;
	$("#dob").textContent = dob;
	
	$("#back").addEventListener("click", () => {

		history.back();
		
	}); // end of click()
	
}); // end of ready()
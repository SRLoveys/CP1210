"use strict";

const $ = (selector) => document.querySelector(selector);

const getMonthText = currentMonth => {
	if (currentMonth === 0) { return "January"; }
	else if (currentMonth === 1) { return "February"; }
	else if (currentMonth === 2) { return "March"; }
	else if (currentMonth === 3) { return "April"; }
	else if (currentMonth === 4) { return "May"; }
	else if (currentMonth === 5) { return "June"; }
	else if (currentMonth === 6) { return "July"; }
	else if (currentMonth === 7) { return "August"; }
	else if (currentMonth === 8) { return "September"; }
	else if (currentMonth === 9) { return "October"; }
	else if (currentMonth === 10) { return "November"; }
	else if (currentMonth === 11) { return "December"; }
};

const getLastDayofMonth = (currentMonth, year) => {
	if (currentMonth === 0) {return 31;}
	else if (currentMonth === 1 && (year % 4 == 0) && (year % 100 !== 0 || year % 400 !==0)) {return 29;}
	else if (currentMonth === 1 && year % 4 !==0) {return 28;}
	else if (currentMonth === 2) {return 31;}
	else if (currentMonth === 3) {return 30;}
	else if (currentMonth === 4) {return 31;}
	else if (currentMonth === 5) {return 30;}
	else if (currentMonth === 6) {return 31;}
	else if (currentMonth === 7) {return 31;}
	else if (currentMonth === 8) {return 30;}
	else if (currentMonth === 9) {return 31;}
	else if (currentMonth === 10) {return 30;}
	else if (currentMonth === 11) {return 31;}
	else if (currentMonth < 0 || currentMonth > 11) {
		alert("Invalid date") 
		return;
	} else {
		alert("Invalid Date")
	}
};

document.addEventListener("DOMContentLoaded", ()=> {
	const today = new Date();
	const currentMonth = today.getMonth();
	const monthName = getMonthText(currentMonth);
	const year = today.getFullYear();

	$("#month_year").textContent = `${monthName} ${year}`

	let row = document.createElement("tr");

	const firstDay = new Date(year, currentMonth, 1).getDay();
	const lastDay = getLastDayofMonth(currentMonth, year);

	for (let i = 0; i < firstDay; i++) {
		const block = document.createElement("td");
		row.appendChild(block);
	}

	for (let j = 1; j <= lastDay; j++) {
		const block = document.createElement("td");
		block.textContent = j;
		row.appendChild(block);

		if ((j + firstDay) % 7 == 0) {
			calendar.appendChild(row);
			row = document.createElement("tr")
		}
	}

	if (row.children.length > 0) {
		calendar.appendChild(row);
	}
});

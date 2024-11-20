"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const addScore = () => {
	const score = parseInt($("#score").value);
	let isValid = true;

	if ($("#name").value == "") {
		$("#name").nextElementSibling.textContent = "Please enter a name"
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}

		if (isNaN(score) || score < 0 || score > 100) {
			$("#score").nextElementSibling.textContent = "Score must be between 0 and 100."
			isValid = false;
		} else {
			$("#score").nextElementSibling.textContent = "";
		}

		if (isValid) {
			names[names.length] = $("#name").value;
			scores[scores.length] = score;
			$("#name").value = "";
			$("#score").value = "";
			$("#name").focus();
		}
}

const displayResults = () => {
	$("#results").textContent = "";

	let total = 0;
	for (let i in scores) {
		total += scores[i];
	}
	const average = total / scores.length;

	let highest = scores[0];
	for (let score of scores) {
		if (score > highest) {
			highest = score;
		}
	}

	const resultsHeader = document.createElement("h2");
	resultsHeader.textContent = "Results";
	$("#results").appendChild(resultsHeader);

	const averageScorePara = document.createElement("p");
    averageScorePara.textContent = `Average score = ${average}`;
    $("#results").appendChild(averageScorePara);

	const highestScorePara = document.createElement("p");
    highestScorePara.textContent = `Highest score = ${highest}`;
    $("#results").appendChild(highestScorePara);
}

const displayScores = () => {
	$("#scores").textContent = "";

	const scoresHeader = document.createElement("h2");
	scoresHeader.textContent = "Scores";
	$("#scores").appendChild(scoresHeader);

	for (let i = 0; i < names.length; i++) {
		const nameScoreLabel = document.createElement("label");
		nameScoreLabel.textContent = `${names[i]} ${scores[i]}`;
		$("#scores").appendChild(nameScoreLabel);
		$("#scores").appendChild(document.createElement("br"));
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#name").focus();
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});
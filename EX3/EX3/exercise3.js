"use strict"

const $ = selector => document.querySelector(selector);

let image = null;
let imageCache = [];
let imageCounter = 0;
const mainImage = $("#image");
const caption = $("#caption");
let timer = null;


const slideShow = () => {
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    caption.textContent = image.alt;
}

const reset = () => {
    mainImage = $("#image");
    caption.textContent = "?????";
}

document.addEventListener("DOMContentLoaded", () => {
	const links = $("#image_list").querySelectorAll("a");

    for (let link of links) {
        image = new Image()
        image.src = link.href
        image.alt = link.title

        imageCache[imageCache.length] = image;
    }

    $("#start").addEventListener("click", () => {
        if (timer == null) {
            timer = setInterval(slideShow, 50)
        } 
            if ($("#start").value == "Start") {
                $("#start").value = "Stop"
                $("#reset").setAttribute("disabled", true)
            } else if ($("#start").value == "Stop") {
                clearInterval(timer)
                timer = null;
                $("#start").value = "start";
                $("#reset").removeAttribute("disabled");
                $("#title").textContent = "YOU WIN";
            }
    })

    $("#reset").addEventListener("click", reset);

});


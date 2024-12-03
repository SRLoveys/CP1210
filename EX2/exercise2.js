"use strict";

const $ = selector => document.querySelector(selector);

let image = null;
let imageCache = [];
const mainImage = $("#image1");
const caption = $("#caption");

const deerButton = () => {
    image = imageCache[1];
   // mainImage.src = image.src *Couldn't get this to work properly
    mainImage.src = "images/deer.jpg";
    mainImage.alt = image.alt;
    //caption.textContent = image.alt; *Couldn't get this to work properly
    caption.textContent = "Deer at Play";
}

const releaseButton = () => {
    image = imageCache[0];
    mainImage.src = image.src; 
    mainImage.src = "images/release.jpg";
    mainImage.alt = image.alt;
    caption.textContent = image.alt; 
    caption.textContent = "Catch and Release";
}

const heroButton = () => {
    image = imageCache[2];
    mainImage.src = image.src;
    mainImage.src = "images/hero.jpg";
    mainImage.alt = image.alt;
    caption.textContent = image.alt;
    caption.textContent = "The Big One";
}

document.addEventListener("DOMContentLoaded", () => {
    const links = $("#image_list").querySelectorAll("a");

    for (let link in links) {
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        
        imageCache[imageCache.length] = image;
    }
    

    $("#deer").addEventListener("click", deerButton);
    $("#release").addEventListener("click", releaseButton);
    $("#hero").addEventListener("click", heroButton);
});


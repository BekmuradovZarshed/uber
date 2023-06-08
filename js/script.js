"use strict";
const btn = document.querySelector(".hamburger"),
      menu = document.querySelector(".header_menu");

btn.addEventListener("click", (e) => {
    btn.classList.toggle("hamburger-active");
    menu.classList.toggle("header_menu-active");
});

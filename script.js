"use strict";

const hamburger = document.querySelector("#hamburger");
const closeMenu = document.querySelector("#close");
const mainNav = document.querySelector(".main-nav");
const mainUl = document.querySelector(".main-ul");
const mailLi = document.querySelectorAll(".main-link");

// if (window.outerWidth > 700) {
//   hamburger.classList.add("hidden");
//   mainNav.classList.remove("remove-from-flow", "main-nav-modifier");
//   mainUl.classList.remove("main-nav-ul-modifier");
// } else {
//   hamburger.classList.remove("hidden");
// }

hamburger.addEventListener("click", () => {
  mainNav.style.display = "block";
  mainNav.classList.add("remove-from-flow", "main-nav-modifier");
  mainUl.classList.add("main-nav-ul-modifier");
  for (const li of mailLi) li.classList.add("main-nav-ul-li-modifier");
  hamburger.classList.add("hidden");
  closeMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mainNav.style.display = "none";
  closeMenu.classList.add("hidden");
  hamburger.classList.remove("hidden");
});

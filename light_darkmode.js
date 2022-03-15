"use strict";

localStorage;
localStorage.setItem("theme", false);
const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  var className = localStorage.getItem("theme");
  if (className == false) {
    this.textContent = "Dark";
    var classname = true;
  } else {
    this.textContent = "Light";
    var classname = false;
  }

  console.log("current class name: " + className);
});

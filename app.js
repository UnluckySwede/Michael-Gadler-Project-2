"use strict";

const addProfileForm = document.querySelector(".add-profile");
const switcher = document.querySelector(".btn");

addProfileForm.addEventListener("submit", addProfile);

switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  var className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }

  console.log("current class name: " + className);
});

let profiles = [];

localStorage.setItem("dark-theme", "true");
localStorage.getItem("dark-theme");

function addProfile(event) {
  event.preventDefault();
  let newPerson = {
    name: document.querySelector(".first-name-input").value,
    lastname: document.querySelector(".last-name-input").value,
    birth: document.querySelector(".birthdate-input").value,
    living: document.querySelector(".alive-input").checked,
    death: document.querySelector(".deathdate-input").value,
  };

  profiles.push(newPerson);
  console.table(profiles);
}

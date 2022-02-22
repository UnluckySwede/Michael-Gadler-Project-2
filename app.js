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

function addProfile(event) {
  event.preventDefault();
  let newPerson = {
    name: "Mikael",
    birth: 2006,
    living: true,
    death: 2020,
  };
  profiles.push(newPerson);
  console.table(profiles);
}

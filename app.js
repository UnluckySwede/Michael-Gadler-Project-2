"use strict";

const addProfileForm = document.querySelector(".add-profile");

addProfileForm.addEventListener("submit", addProfile);

let profiles = [];

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

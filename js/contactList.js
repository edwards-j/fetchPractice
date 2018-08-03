"use strict"

//This module pulls the data from the dataFetch module and structures it based on the makeContact module

let data = require("./dataFetch")
let contactBuilder = require("./makeContact")

let photoDisplay = document.getElementById("photo-display");

let showItems = () => {
    data()
        .then((result) => {
            result.forEach(key => {
                photoDisplay.innerHTML += `<div class="wrapper">${contactBuilder(key)}</div>`;
            })
        })
};

module.exports = showItems

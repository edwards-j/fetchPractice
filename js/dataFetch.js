"use strict"

//This module gets the data from the JSON file

let loadData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((result) => {
          return result;
       },
       (error) => {
          return error;
       })
    };

module.exports = loadData;
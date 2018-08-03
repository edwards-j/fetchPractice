(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./dataFetch":2,"./makeContact":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict"

let showItems = require("./contactList")

showItems();
},{"./contactList":1}],4:[function(require,module,exports){
"use strict"

//This module builds out the HTML structure for the contacts

let buildPhoto = (data) => {
    //building a string to create the visual display

    let block = "",
        image = `<img src = https://picsum.photos/150/150/?random style = "" >`,
        name = `<h2>Name: ${data.name}</h2>`,
        email = `<h3>email: ${data.email}</h3>`,
        username = `<h3>username: ${data.username}</h3>`;

        
    block = `<div class="card"><div>${image}</div> <div class="words">${name} ${email} ${username}</div></div>`;
    return block;
};

module.exports = buildPhoto
},{}]},{},[3]);

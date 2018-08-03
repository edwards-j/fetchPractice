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
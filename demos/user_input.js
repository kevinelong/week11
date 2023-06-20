const prompt = require('prompt-sync')({sigint: true});

const first = prompt("What is your name?");

console.log("Hello " + first);

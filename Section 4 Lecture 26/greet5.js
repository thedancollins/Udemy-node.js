//The "Revealing Module Pattern"
var greeting = "Hello world from greet5.js";
function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
};
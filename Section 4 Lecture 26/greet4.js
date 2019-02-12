function Greetr() {
    this.greeting = "Hello world from greet4!";
    this.greet = function () {
        console.log(this.greeting);
    };
}

module.exports = Greetr; //Send the ability to create a new object rather than a new object as in greet3.js.  Notice that the function name is Greetr and not Greet4 (as in app.js).

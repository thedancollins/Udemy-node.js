function Greetr() {
    this.greeting = "Hello world from greet 3!";
    this.greet = function () {
        console.log(this.greeting);
    };
}

module.exports = new Greetr(); //sends a new object

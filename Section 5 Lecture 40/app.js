'use strict'; //to use classes I need this

function Person(first, last) {
    this.firstname = first,
    this.lastname = last
}
class Person2 {
    constructor(first, last) {
        this.firstname = first,
        this.lastname = last
    }

    greet() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname); 
    }
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
john.greet();
var jane = new Person('Jane', 'Doe');
jane.greet();

var john2 = new Person2('John2', 'Doe');
john2.greet();
var jane2 = new Person2('Jane2', 'Doe');
jane2.greet();


console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);

console.log(john2.__proto__);
console.log(jane2.__proto__);
console.log(john2.__proto__ === jane2.__proto__);


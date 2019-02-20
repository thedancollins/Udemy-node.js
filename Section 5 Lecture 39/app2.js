var util = require('util');

function Person() {
    this.firstname = 'John',
    this.lastname = 'Doe'
}

Person.prototype.greet = function () {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
    Person.call(this); //without this line the officer.greet() call below cannot see firstname and lastname
    this.badgenumber = '1234';
}

Policeman.prototype.greet = function () {
    console.log('Hello ' + this.firstname + ' ' + this.lastname + '; badge: ' + this.badgenumber);
}

util.inherits(Policeman, Person);

var officer = new Policeman();

officer.greet();

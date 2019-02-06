//an immediately invoked function expression
(function () {

    var firstname = 'John';
    console.log(firstname);
}());

var firstname = 'Jane';
console.log(firstname);

firstname = 'Jane.2';

(function (lastname) {

    var firstname = 'John.2';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname);

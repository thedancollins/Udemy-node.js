var greet = require('./greet1.js');
greet();

var greet2 = require('./greet2.js');
greet2.greet();
//OR
var greet2a = require('./greet2.js').greet;
greet2a();

var greet3 = require('./greet3.js');
greet3.greet();
greet3.greeting = "Changed Hello World";

//greet3b is the same object as greet3
var greet3b = require('./greet3.js');
greet3b.greet();

var Greet4 = require('./greet4.js');
var grtrt = new Greet4();
grtrt.greet();

var greet5 = require('./greet5');
greet5.greet();
greet5.greeting = "Sucker"; //does not throw an error
greet5.greet();

var greet5b = require('./greet5').greet;
greet5b();

'use strict';

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    //"super" constructor
    EventEmitter.call(this);
    this.greeting = 'Hello world';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ": " + data);
    this.emit('greet', data);
}

var GreetrFromModule = require('./greetr.js');


var greeter1 = new Greetr();
var greeter2 = new GreetrFromModule(); //new Greetr2();

greeter1.on('greet', function(data) {
    console.log('Someone greeted' + ": " + data);
});
greeter2.on('greet', function(data) {
    console.log('Someone greeted2' + ": " + data);
});


greeter1.greet("Tony");
greeter2.greet("MAX");
'use strict';

var EventEmitter = require('events');

module.exports = class Greetr2 extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world2';
    }

    greet(data) {
        console.log(`${ this.greeting }: ${ data }`);
        this.emit('greet', data);
    }
}
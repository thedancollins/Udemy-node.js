var Emitter = require('events');// require('./emitter.js');
var eventConfig =- require('./config.js').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('Somewhere, Someone said hello');
});
emtr.on(eventConfig.GREET, function(){
    console.log('a greeting occured!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);

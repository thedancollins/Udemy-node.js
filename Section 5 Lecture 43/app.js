var Emitter = require('./emitter.js');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('Somewhere, Someone said hello');
});
emtr.on('greet', function(){
    console.log('a greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');

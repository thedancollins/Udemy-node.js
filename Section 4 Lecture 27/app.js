var greet = require('./greet');
var greet2 = require('./greet2');
greet2.greet();
//greet();  //this will throw an error because greet.js returns module.exports not exports (which was created as a seperate object form module.exports)
/*greet();  //this will throw an error because greet.js returns module.exports not exports (which was created as a seperate object form module.exports)
^

TypeError: greet is not a function
    at Object.<anonymous> (/Users/realdancollins/Documents/Code/udemy/Node.js/Section 4 Lecture 27/app.js:2:1)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:743:3)*/ 


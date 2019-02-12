exports = function() {
    console.log('Hello from exports instead of module.exports');
}

console.log("exports = " + exports);
console.log("module.exports = " + module.exports);

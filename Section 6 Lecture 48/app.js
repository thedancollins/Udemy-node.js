//8 bytes
var buffer = new ArrayBuffer(12);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
view[2] = 6;
console.log(view);

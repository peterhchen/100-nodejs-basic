// Comment
var buffer1 = new Buffer.from('ABC');

//copy a buffer
size = buffer1.length;
console.log ('size: ', size);
//var buffer2 = new Buffer.alloc(3);
var buffer2 = new Buffer.alloc(size);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
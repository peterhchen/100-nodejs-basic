// Comment
var buffer1 = new Buffer.from ('Hello friend!!');
//slicing a buffer
//var buffer2 = buffer1.slice(0,9);
size = 'Hello'.length;
var buffer2 = buffer1.slice(0, size);
console.log("buffer2 content: " + buffer2.toString());
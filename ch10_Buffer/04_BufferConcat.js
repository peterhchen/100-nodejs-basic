// Comment
var buffer1 = new Buffer.from('Hello Friends. ');
var buffer2 = new Buffer.from('We make learning Simple and Easy!!');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());
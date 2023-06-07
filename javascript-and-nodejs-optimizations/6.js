/**
 * 6.js
 * JavaScript and Node.js optimizations
 */

const arrayLike = {};

arrayLike[0] = "a";
arrayLike[1] = "b";
arrayLike[2] = "c";
arrayLike.length = 3;

const actualArray = Array.prototype.slice.call(arrayLike);
actualArray.forEach((element, index) => console.log(index, element));

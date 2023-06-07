/**
 * 5.js
 * JavaScript and Node.js optimizations
 */

const arrayLike = {};

arrayLike[0] = "a";
arrayLike[1] = "b";
arrayLike[2] = "c";
arrayLike.length = 3;

Array.prototype.forEach.call(arrayLike, (element, index) =>
  console.log(index, element)
);

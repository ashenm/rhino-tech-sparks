/**
 * 3.js
 * JavaScript and Node.js optimizations
 */

const array = new Array(3);
%DebugPrint(array);

array[0] = "a";
array[1] = "b";
array[2] = "c";
%DebugPrint(array);

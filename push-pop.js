// add elememt in array;last element add;
var lastBench = ['kalam','balam','salam'];
lastBench.push('jalam','palam');
console.log(lastBench);
var friendAge = [11,13,17,12,45];
// friendAge.push(16,19,33);
// console.log(friendAge);

// remove an element from an arry;
//last element remove
friendAge.pop();
friendAge.pop();

//first element remove;
var removeFirst = lastBench.shift()
friendAge.shift();
console.log(friendAge);
console.log(lastBench);
console.log(removeFirst);

// first element add;
friendAge.unshift(112,120,111);
console.log(friendAge);
lastBench.unshift('malami','jalami','kalami','tonami');
console.log(lastBench);
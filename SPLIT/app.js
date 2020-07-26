/*
The JS split Method splits a string into an array of substring
*/

const str = 'Today was a very productive day';
console.log(str.split(' '));

const today = 'Today was a very productive day';
console.log(today.split(' ', 3));

//turn a string into an array
const string = 'This is going to be fun looking into the string method';
console.log(string.split());

console.log(string.split(''));

console.log(string.split(','));

console.log(string.split('g')); // return ["This is ", "oin", " to be fun lookin", " into the strin", " method"]

console.log(string.split('g', 2));

const tricky = 'goshgoshgoshgoshgoshgoshgoshgosh';
console.log(tricky.split('sh'));
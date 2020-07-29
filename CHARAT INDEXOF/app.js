//charAt() method returns the character at a specified index of a string
//It has one parameter

const position = 'I want to search positions within this string';
console.log(position.charAt(15));
console.log(position.charAt(3));

//indexOf gives the position of a value.It takes two parameter, the second one is optional
const sleep = 'I\'am going to go to sleep after this';
console.log(sleep.indexOf('g'));
console.log(sleep.indexOf('going'));
console.log(sleep.indexOf('to', 5));

//lastIndexOf() method returns the position of the last occurence 
//of a specified value in a string
console.log(sleep.lastIndexOf('to'));
console.log(sleep.lastIndexOf('g', 2));
console.log(sleep.lastIndexOf('g'));

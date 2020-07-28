//reverse & join
//The javascript reverse Method simply reverse 
//the order of an array

const array = ['r','e', 't', 'u', 'p', 'm', 'o', 'c']
console.log(array.reverse());

//Join() Method joins the elements of an array into a string, and
//returns a string.

console.log(array.join(''));
//return this: r] [e] [t] [u] [p] [m] [o] [c
console.log(array.reverse().join('] ['));// r] [e] [t] [u] [p] [m] [o] [c

//return the the str 'excellent' using split,reverse, join
const splitString = 'tnellecxe';
console.log(splitString.split('').reverse().join(''));//excellent

//with this str return Great work today
const today = 'today work Great';
console.log(today.split(' ').reverse().join(' '));//Great work today

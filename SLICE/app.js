/*
The slice() Method return the seleccted element in an array, as a new object array.
It slices out what you tell it to.

*/

const arr1 = [0,1,2,3,4,5,6]
console.log(arr1.slice(3,5));//[3,4]

//The slice() Method has two parameters (start, end). Both optional

const array = ['birds', 'trees', 'fish', 'land', 'sea', 'boats'];
console.log(array.slice(1));//return ['trees', 'fish', 'land', 'sea', 'boats']
console.log(array.slice(1,3));//return ['trees', 'fish']

const array1 = ['fire', 'water', 'ice', 'steam', 'sand', 'grass'];
console.log(array1.slice(0,4));//return ['fire', 'water', 'ice', 'steam']

//console.log(,3); => Uncaught SyntaxError: Unexpected token ','
console.log(array1.slice(3));//return ['steam', 'sand', 'grass']

//two ways to get the last element in the arr
console.log(array1.slice(5));//['grass']
console.log(array1.slice(-1));//['grass']

//get the last two element in the arr
console.log(array1.slice(-2));
console.log(array1.slice(4))

console.log(array1.slice(-5,-2));//return ['water', 'ice', 'steam']
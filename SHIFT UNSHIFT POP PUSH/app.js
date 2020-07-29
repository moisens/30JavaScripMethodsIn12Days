//Shift(), unshift(), pop()
//The shift() method removes the first array element and
//shifts all of the other elements to a lower index
//shift return the element that it removes from an array


const array = ['one', 'two', 'three', 'four', 'five', 'six'];
console.log(array);
console.log(array.shift())
console.log(array);

array.unshift('one');
console.log(array);
console.log(array.unshift());//return the length 


//pop removes an element at the end of an arr
console.log(array.pop())//return six
console.log(array);

array.push('six');
console.log(array);
console.log(array.push());//length of arr



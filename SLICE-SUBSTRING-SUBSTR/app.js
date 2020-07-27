//sustr()
//The substr() method returns a portion of 
//the string, starting at the specified index 
//and extending for a given number of characters afterwards.

let str = 'This is day three';
console.log(str.substr(1,3));//his
console.log(str.substr(0,8));//This is
console.log(str.substr(6));//s day three

let string = 'Now it\'s my turn to try it out.';

//return yhe string 'out'
console.log(string.substr(27,3));//out

//return the last t of the string using a negative number
console.log(string.substr(-2,1));//t

//In the string return : 'my turn to tr'
console.log(string.substr(8,14));//my turn to tr

//start from the beginning of the string to s, but exclude the s
console.log(string.substr(0,7));

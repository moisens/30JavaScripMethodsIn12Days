//String(), toString(), toFixed, Number(), parseFloat(), parseInt()

//toString - method -> convert a number to a string.
//String - function -> convert a number to a string.
console.log('-----String & toString------');
const numberToString = 500;
console.log(typeof numberToString, numberToString);
const newString = numberToString.toString();
console.log(typeof newString, newString);

console.log(typeof String(numberToString), String(numberToString));

//toFixed
//Convert a number to a string, and returns the string with a set number 
//of decimals that are passed in as argument
console.log('-----toFixed------');
const money = 3;
const moneyString = money.toFixed(2);
console.log(typeof moneyString, moneyString);

const moneys = 3.22;
console.log(moneys.toFixed(4));
console.log(moneys.toFixed(0));// O as the parameter, it'll round up the string

const money2 = 3.78;
console.log(money2.toFixed(0));

console.log('-----Number()------');
//Number - function - Convert a string to number
const aNumber = '40';
console.log(typeof Number(aNumber) ,Number(aNumber));

console.log('-----parseInt()------');
//parseInt - function - parse a string and return a whole number
const decimal = '3.22';
console.log(parseInt(decimal));

console.log(parseInt('3.78')); //return 3 -> it rounds down
console.log('-----parseFloat()------');
//parseFloat - function - parses a string and returns a number.
//keep decimals places
const decimals = '3.99';
console.log(parseFloat(decimals));


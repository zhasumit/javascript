// arithmetic operators 
//  +  addition
//  -  subtraction
//  *  multiplication
//  /  division
//  %  modulus (remainder)
//  **  exponentiation (ES2016)


console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 * 2); // 10
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1
console.log(5 ** 2); // 25


//  ===================================================================================================


// assignment operators
//  =  assignment
//  +=  addition and assignment
//  -=  subtraction and assignment
//  *=  multiplication and assignment
//  /=  division and assignment
//  %=  modulus and assignment
//  **= exponentiation and assignment
let a = 5; // assignment
let b = 10; // assignment

console.log(a += b); // 15 (addition and assignment)
console.log(a -= b); // 5 (subtraction and assignment)
console.log(a *= b); // 50 (multiplication and assignment)
console.log(a /= b); // 5 (division and assignment)
console.log(a %= b); // 5 (modulus and assignment)
console.log(a **= b); // 9765625 (exponentiation and assignment)


//  ===================================================================================================



// comparision operators
//  ==  equal to
//  ===  equal value and type
//  !=  not equal to
//  !==  not equal value or type
//  >  greater than
//  <  less than
//  >=  greater than or equal to
//  <=  less than or equal to
console.log(5 == '5'); // true (equal to)
console.log(5 === '5'); // false (equal value and type)
console.log(5 != '5'); // false (not equal to)
console.log(5 !== '5'); // true (not equal value or type)
console.log(5 > 2); // true (greater than)
console.log(5 < 2); // false (less than)
console.log(5 >= 5); // true (greater than or equal to)
console.log(5 <= 5); // true (less than or equal to)


//  ===================================================================================================

// !! 
//  !!  double negation (converts a value to boolean)
console.log(!!5); // true (5 is truthy)
console.log(!!0); // false (0 is falsy)

//  ===================================================================================================


// logical operators
//  &&  logical AND
//  ||  logical OR
//  !  logical NOT
console.log(true && false); // false (logical AND)
console.log(true || false); // true (logical OR)
console.log(!true); // false (logical NOT)

// bitwise operators
//  &  bitwise AND
//  |  bitwise OR
//  ^  bitwise XOR
//  ~  bitwise NOT
//  <<  left shift
//  >>  right shift
//  >>>  unsigned right shift
console.log(5 & 3); // 1 (bitwise AND)
console.log(5 | 3); // 7 (bitwise OR)
console.log(5 ^ 3); // 6 (bitwise XOR)
console.log(~5); // -6 (bitwise NOT)
console.log(5 << 1); // 10 (left shift)
console.log(5 >> 1); // 2 (right shift)
console.log(5 >>> 1); // 2 (unsigned right shift)

//  ===================================================================================================

// typeof operator
//  typeof  returns the type of a variable
console.log(typeof 5); // "number"
console.log(typeof 'hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol('symbol')); // "symbol"
console.log(typeof BigInt(12345678901234567890)); // "bigint"

//  ===================================================================================================


// unary operator 
// + tries to convert to a number 
// - negates 
// ++ increment 
// -- decrement 

console.log(+"5") // 5
console.log(-"5") // -5
let count = 5;
console.log(++count); // 6 (increment)
console.log(--count); // 5 (decrement)

// ===================================================================================================

//  conditional (ternary) operator
//  ? :  evaluates a condition and returns one of two values based on the condition
const condition = true;
const result = condition ? 'Condition is true' : 'Condition is false';
console.log(result); // "Condition is true"

//  ===================================================================================================

// instanceof operator
//  instanceof  checks if an object is an instance of a constructor function
// doesnot work with values (only with reference values)
class Person { }
const person = new Person();
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true

let A = [];
console.log(A instanceof Array) // true

let B = {}
console.log(B instanceof Object) // true
console.log(B instanceof Array) // false

// =====================================================================================================

// in operator
//  in  checks if a property exists in an object
const obj = { name: 'Alice', age: 25 };
console.log('name' in obj); // true
console.log('gender' in obj); // false

// delete operator
//  delete  removes a property from an object
const obj2 = { name: 'Bob', age: 30 };
delete obj2.age;
console.log(obj2); // { name: 'Bob' }

// void operator
//  void  evaluates an expression and returns undefined
console.log(void 0); // undefined
console.log(void (5 + 2)); // undefined
// comma operator
//  ,  evaluates multiple expressions and returns the value of the last expression
console.log((5, 2, 3)); // 3 (evaluates 5, 2, and returns 3)
console.log((5 + 2, 10 - 3)); // 7 (evaluates 5 + 2 and 10 - 3, and returns 7)

//  nullish coalescing operator
//  ??  returns the right-hand operand if the left-hand operand is null or undefined
const value = null;
const defaultValue = 'Default Value';
const finalValue = value ?? defaultValue;
console.log(finalValue); // "Default Value" (because value is null)
//  optional chaining operator
//  ?.  allows accessing properties of an object without throwing an error if the object is null
const obj3 = { name: 'Charlie', address: { city: 'New York' } };
console.log(obj3.address?.city); // "New York" (accesses city property

// safely, returns undefined if address is null or undefined)
console.log(obj3.phone?.number); // undefined (phone is not defined, so it returns
// undefined without throwing an error)
//  spread operator
//  ...  allows expanding an iterable (like an array) into individual elements
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5] (spreads the elements of arr and adds 4 and 5)
//  rest operator
//  ...  allows collecting multiple elements into an array
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10 (collects all arguments into an array and sums them)

//  destructuring assignment
//  allows unpacking values from arrays or properties from objects into distinct variables
const [x, y] = [1, 2];
console.log(x, y); // 1 2 (unpacks values from the array)

const { name, age } = { name: 'David', age: 30 };
console.log(name, age); // "David" 30 (unpacks properties from the object
//  template literals
//  allows embedding expressions within string literals using backticks
const username = 'Eve';
const greeting = `Hello, ${username}!`;
console.log(greeting); // "Hello, Eve!" (embeds the value of username in
// the string)

//  tagged template literals
//  allows calling a function with a template literal and its expressions
function tag(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] || '');
  }, '');
}


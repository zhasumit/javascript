# History of JavaScript

### Static websites
- website having only `html` and `css` 
- no javascript (no interaction [static])
- NetScape used to have that kind of browser
- everything used to be static 
- simple calculations 
  - api response goes to server 
  - calculates whatever is requested
  - then returns to the user as static page to user

<img src='images/netscape%20in%201995.png' width=600>

### JavaScript creation
- user's computer can do calculations (so make a language)
- `Brendan Eich`, created Mocha, later named LiveScript
- He made it in 10 days
- Later named `JavaScript` just for making it popular
- Jeff Atwood is the founder of stack overflow and in 2007 he said something called Atwood's law  
- `Jeff Atwood:` Any application that can be written in javaScript will be eventually written in javaScript


### Standardisation of JavaScript
-  Microsoft made `Jscript` taking things out of JavaScript
-  `ecma` European Computer Manufacturers Association
-  JavaScript was made standard by this organisation
-  ecma standard made JS the hero for all the browsers
-  that standard in called ECMAScript `ES6`, `ES7` ...

### NodeJS
- chrome came in the market with its own engine `v8` engine
- This `v8` was faster and better compiler for JavaScript
- Firefox made `SpiderMonkey` and other browsers made other engines
- `Ryan Dahl` took that `v8` engine and make `nodejs`
- This compilation now came outside of browser and locally compile `JS`
- `nodejs` runs on servers 

### Library and Frameworks
- Library is set of logic, Framework is specific set of rules on the logic
- Framework is restrictive and compulsive to follow a specific step of code
- `Angular`, `React`, `Next`, `Nest`, other library and frameworks evolved out of `nodejs`

### Interpreted or compiled ?
- for computer to understand it converts the code into 0s and 1s (binary)
- Interpreted: line by line conversion into binary.
- Compiled: entire file in coverted at once to binary.
- compiled is fast, error is also compiled, creates binary once
- interpreter can be paused on error and reinterpreted
- `JS` was compiled at first, so called twilight language
- `v8` took best of both worlds, from compiler and interpreter
- This new compilation is called __Just-In-Time__ compilation
- a component within a runtime environment that translates code during program execution, rather than before

<br>
<br>
<br>
<br>
<br>

#  JavaScript code compilation in browser
- set of instructions is called program
- program is converted into binary, 'JIT' compiler in JS
- What software to install for JS compilation?
- Connect `html` and `js` file 
- then open that html and look in terminal of the browser
- the console opened using `ctrl` + `shift` + `i`
- thereafter the javascript is executed in that REPL
- `REPL`: Read Evaluate Print Loop
- `<script src="./script.js" defer></script>`
- using this script and defer the `.js` file is linked to html
- the browser then executes the js in its runtime 

<img src='./images/Headers.png' width=1200>

<img src='./images/jsPreview.png' width=1200>

<img src='./images/consoleREPL.png' width=1200>

<br>
<br>

- The same `javaScript` can be written in the REPL console
- Read Evaluate Print Loop is used to execute things in runtime
- This REPL is used for constant compilation in browser environment
- up and down arrows are for the previous and next commands in history of REPL console
- `clear()` or `ctrl + l` are used to clear the console
- also there is a button 


<img src='./images/clearbutton.png' width=300>

<img src='./images/REPL.png'>

- `ctrl + /` is to comment (ignore) the code
- `//` is used for commenting the code

<br>

```javascript
console.log("Hello world")


function addTwoNumbers(a, b) {
    return a + b
}


const multiply = (a, b) => a * b


console.log(addTwoNumbers(10, 4))
console.log(multiply(10, 4))

```

<img src='./images/linenumbersInREPL.png' width=1000>
<img src='./images/looking for js file sources in console.png' width=1200>



<br>
<br>
<br>
<br>
<br>

# Javascript Programming
- `ES6` and above is solid and sorted out versions of javascript and we are gonna learn that
- `ES` is for `ECMA` ECMAScript which is standardisation by European Computer Manufacturers Association
- keywords are some words with special meanings 
- some keywords are like `var`, `let`, `const`, `function`, `return`, `for`, etc
- john, sumit, apple, mango these are simply words, not containing any special meaning

<br>
<br>



## Variables 
- memory address containing some value inside it
- computer memory recognises that part as some special container 
- this container holds some specific value
- Variables are containers that hold data.
- used as the active memory of the program for computations
- Eg: Hero has some life/health points to signify the health in a game
- `score` is suppose some value which can be changing 
- some values dont change like pi is 3.1415... which is constant 
- `var`, `let`, `const` - three ways to make a variable  
- variable exists throughout the lifecycle of the program


#### ways to create a variable

```js
a = 12;

var a;
let a;
// const a; // cannot be done (error)

var a = 15;
let a = 20;

const a = 25;
```

<br>
<br>

- There are two steps for variable in memory
- Declaration: declare that variable is there. 
  - `var a;`, `let a;`
- Initialization: give first value to the variable. 
  - `let a = 12;`, `const pi = 3.1415`, `var name = "Sumit"`
- `var` is outdated — it's better to use `let` and `const` .
- `let` and `const` behave similarly, but const gives more safety
- `var`
  - Old and risky
  - adds itslef to window (environment)
  - function scoped (lifecycle of the function), Hoisted to the top with undefined value
  - Scoped to functions, not blocks (so can be accessed after the scope inside the function)
  - Can be redeclared and reassigned multiple times same variableName and no error shows
- `let`
  - used to make the variable 
  - Scoped to blocks `{}`
  - Can be reassigned but not redeclared
  - Hoisted, but stays in the Temporal Dead Zone (TDZ)
- `const`
  - Scoped to blocks `{}`
  - Cannot be reassigned or redeclared
  - Value must be assigned at declaration
  - TDZ applies here too

```js
var a = 13;
var a = 15;

let b = 20;
// let b = 25; // gives error
// SyntaxError: Identifier 'b' has already been declared

const groom = "Harsh"
const bride = "Priya"
// make sure that the bride and groom doesnot change
// TypeError: Assignment to constant variable.
```

var attaches to window

<img src="./images/var attaches to window.png" width=1200>


let doesnot attach to window

<img src="./images/let does not attached to window.png" width=1200>

### const can change values sometimes
- If const holds an object/array, you can still change its contents:
- `const` prevents reassignment, but updation of values is allowed 
- `const` doesn't make things fully constant. It protects the variable, not the value.

```js
const student = { name: "Riya" };
student.name = "Priya";           // ✅ OK
student = {};                     // ❌ Error
```


<br>
<br>
<br>
<br>

### Scope 
- `{}` : local/block scope
- `function(){ // inside this }` : functional scope
- `entire program` : global scope (if not inside any `{}` but inside program)
- `let` and `const` follow block scope, inside some `{}`
- `var` ignores block scope (functional scoped) => leads to errors

```js
{
  var x = 5
  let y = 10
  const z = 15
}
console.log(x)
console.log(y)    // error (only block scoped)
console.log(z)    // error (only block scoped)
```

### `let` and `const` are block scoped

```js
let age = 5
let isBirthday = true

if (isBirthDay) {
  let age = 6
  console.log(age)  // 6
}
console.log(age)    // 5
```

#### `var` being functional scoped
- var is functional scoped, not block scoped, only respects function
- all the code goes inside a function
- so the entire program is functional scoped at end 
- so var is messed up inside the entire program (functional scoped)

```js
function abcd(){
    if(true){
        var answer = 96
    }
    console.log(answer)
}
abcd()
// console.log(answer) // error
```

<br>
<br>

### Temporal Dead Zone
- Area in which program knows the existence of variable 
- but cannot access the variable
- `TDZ` is the line till which the variable is initialized
- Before initialisation the variable is simply in memory but cannot be accessed
- happes in `let` and `const` - gives ReferenceError
- but not in `var`, it gives undefined

```js
console.log(a);

let a = 20;
// ReferenceError: Cannot access 'a' before initialization
```

<br>
<br>

### Hoisting
- JS prepares memory before running code
- __`Hoisting`__ : moves all the declarations to the top
- describe the state where variables are un-reachable.
- They are in scope(memory), but they aren't initialised.
- `let` and `const` give ReferenceError, `var` gives `undefined` in TDZ
- The `let` and `const` variables exist in the TDZ from the start of their enclosing scope until they are declared.

```js
{
    // This is the temporal dead zone for the age variable!
    // This is the temporal dead zone for the age variable!
    // This is the temporal dead zone for the age variable!
    // This is the temporal dead zone for the age variable!
    let age = 25; // Whew, we got there! No more TDZ
    console.log(age);
}
```


### why `var` gives undefined
- `var a = 15;` is broken into two parts 

```js
var a = undefined
a = 12
```

- so the declaration of the variable `var a = undefined` goes to the top
- initialisation part is at the point where we actually write the variable
- suppose at line 10 we wrote `var a = 12`, so there it gets initialized
- Use `const` by default. Use `let` only when you plan to change the value.
- Avoid `var` — it belongs to the past.

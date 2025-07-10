console.log("10" + 1);          // 101
console.log("10" - 1);          // 9
console.log(true + false);      // 1
console.log(!!"Sumit");         // true

let str = "42";
let num = +str;
console.log(num); // 42


let age = 17;
let msg = age >= 18 ? "Adult" : "Minor"; // Minor

let marks = 6;
let status = marks >= 80 ? "Excellent" : marks >= 60 ? "Good" : marks >= 40 ? "Pass" : "Fail"
console.log(status)


let points = 60
let rank = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";


let loggedIn = true
let hasToken = false

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log(access) // Deny

let i = 1
console.log(i++)    // 1
console.log(++i)    // 3

// ++var and var++ 
let x = 3
let y = x++
console.log(x, y) // 4 3

let p = 4
let q = ++p
console.log(p, q) // 5 5

let n = 5
let result = n++ + ++n
console.log(result) // 12

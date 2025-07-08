// var let const 

A = 12;
var A;
let B;

var A = 15;

let C = 20;
const D = 25;

// let C = 25; // redeclaration can not be done
const discount = 0.12; // so discount is always 12% cannot change


// -----------------------------------------------------------------------


var a = 13;
var a = 15;

let b = 20;
// let b = 25; // gives error

const groom = "Harsh"
const bride = "Priya"

// groom = "Abhishek"

// -----------------------------------------------------------------------

function abcd() {
    if (true) {
        var answer = 96
    }
    console.log(answer)
}
abcd()
// console.log(answer)


// -----------------------------------------------------------------------

// block scoped 
let age = 5
let isBirthday = true

if (isBirthday) {
    let age = 6
    console.log(age)    // 6
}
console.log(age)        // 5


// ----------------------------------------------------------------------

const accountId = 6388121
let accountMail = "Sumit@codz.com" // let can be changed 
var accountPassword = 12345 // var is also variable 
let accountState; // without definition => contains an undefined 

accountCity = "Bangaluru" // direct variable declaration
accountMail = "sz@codz.com"
accountPassword = 213221
accountCity = "Jaipur"

console.log(accountId); // table like consoling
console.table([accountId, accountMail, accountPassword, accountCity, accountState])

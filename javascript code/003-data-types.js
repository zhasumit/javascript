// data type is simply type of data
// primitives -> already made we just copy them
// reference data types

let name = "Sumit Kumar Jha";
let age = 24;
let isOnline = false;
let hasDisorders; // undefined
let kids = null; // not now but later in future
let friend = Symbol("sushmita");
let totalkarma = 123456789012345678901234567890n

console.log(typeof name)
console.log(typeof age)
console.log(typeof isOnline)
console.log(typeof hasDisorders)
console.log(typeof kids)
console.log(typeof friend)
console.log(typeof totalkarma)


let myFriends = ['a', 'b', 'c', 'd', 'e']
console.log(myFriends)

let yourFriends = myFriends

// so no b also has the same access of friends 
// if b removes some friends then i have the same friends as b then

// Strings
let naam = 'sumitjha'
let gender = `male`
let lastname = "jha"

// multiple line string using backticks ``
console.log(`Hello, 
I am Sumit Kumar Jha, 
writing documentation for node and javascript
trying to make good material for revision`)


// number 
let a = 10
let b = -100
let c = 3.532
let d = -45.234


// null undefined
let currentSubject = null
let quirks = undefined
let profilePicture


// Symbol
let person1 = 'Sumit'
let person2 = 'Sumit'
let person3 = Symbol('Sumit')
let person4 = Symbol('Sumit')

console.log(person1 === person2)
console.log(person3 === person4)


let obj = {
    uid: 1,
    name: "Sumit",
    age: 24,
    email: "sumitjha1618@gmail.com"
}

console.log(obj)
console.log(obj.uid)

let u1 = Symbol("uid")
obj[u1] = 200

console.log(obj[u1])


// Bigint
console.log(Number.MAX_SAFE_INTEGER) // more than this gives precision issues 9007199254740991
// value more than this we take bigint, we take a big number and put n at end
// change in this values needs other to be bigint as well (so put n at end)
let piggyBank = 12324565789000000000000n
piggyBank += 4n

console.log(piggyBank)      // 12324565789000000000004n


// Non Primitve data types
let selectedPlayers = [1, 2, 3, 7, 9, 10, 11]
let goingToTournament = selectedPlayers

goingToTournament.pop() // player #11 was removed 
console.log(goingToTournament)      // [ 1, 2, 3, 7, 9, 10 ]
console.log(selectedPlayers)        // [ 1, 2, 3, 7, 9, 10 ]

let object = {
    name: 'Cat'
}

let animal = object
animal.name = 'Dog'

console.log(object.name)    // Dog
console.log(animal.name)    // Dog

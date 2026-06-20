"use strict"; // treat all JS code as newer version

// alert("Hello") we are using nodeJs not browser

console.log(3 + 3)

console.log('bear')

let name = "bear"
let age = 18
// let isLoggedIn = false

// number => 2 to power 53
//bigint
//string
//boolean => true or false
//null => standlon value with no value
//undefined => 
//symbol => unique value that cannot be changed

//object

console.log(typeof undefined) // undefined
console.log(typeof null) // object


// ******************************************

// Primiitive data types in JavaScript

// 7 types: strings, Number, Boolean, Null, Undefined, 
// Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id ===anotherId)

const bigNumber = 35076934363209639n


// Reference types (Non-Primitive)

// Arrays, Objects, Functions

const heros = ["Batman", "Superman", "Superman"] // arrays

let myObject = {
    name: "white Bear",
    age: 18,
}  // this is representation of an OBJECT

const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof myFunction)

// *******************************************

// Stack(primitive), Heap Memory(non primitive)

let myYoutubename = "WhiteBear"

let anothername = myYoutubename // it always gives an copy of the value,
// so if you change it then there will be no effect on the original value
anothername = "panda"

console.log(anothername)
console.log(myYoutubename)


let userOne = {
    email: "whitebear.com",
    upi: "456"
}

let userTwo = userOne
// it gives the refernce of the original value and not the dublicate one

console.log(userOne.email)
console.log(userTwo.email)


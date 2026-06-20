// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString()) // toString is used to convert
// date object to string format
// console.log(myDate.toISOString())
// console.log(myDate.toJSON()) // toISOString and toJSON are same but
// toISOString is used for human readable format 
// and toJSON is used for machine readable format
// console.log(myDate.toLocaleString()) // tells exact time 
// and date in local format
// console.log(myDate.toLocaleDateString()) // tells only date in local format
// console.log(myDate.toLocaleTimeString()) // tells only time in local format
// console.log(myDate.toDateString()) // tells only date in human readable format
// console.log(myDate.toTimeString())

// console.log(typeof myDate)

// let myCreatedDate = new Date(2026, 0, 26)
// let myCreatedDate = new Date(2026, 0, 26, 5, 3)
// let myCreatedDate = new Date("2026-02-14")
let myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)

new Date.toLocaleString('default', {
    weekday: "long",
    Month: "Lomg"
})
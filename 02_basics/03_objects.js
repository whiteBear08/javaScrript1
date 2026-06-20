// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: 'bear',
    "full name": "white bear",
    [mySym]: "myKey1",
    'age': 18,
    location: 'jaipur',
    email: 'bear@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Tuesday', 'Wednesday']
}

// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "bear@gmail2.com"
// Object.freeze(JsUser) // it will not allow to change the object
JsUser.email = "white@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
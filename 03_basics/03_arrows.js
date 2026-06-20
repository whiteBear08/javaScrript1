const user = {
    username: 'rohan',
    price: 999,

    welcomeMsg: function(){
        console.log(`welcome ${this.username} to our website`)
        console.log(this)
    }
}

// user.welcomeMsg()
// user.username = 'sam'
// user.welcomeMsg()

// console.log(this)

// function chai(){
//     let username = 'rohan'
//     // console.log(this.username) // this is only valid in objects
// }   console.log(this)

// chai()


// const chai = () => {
//     const username = 'rohan'
//     console.log(this)

// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // explicit return of the code
// } // this is arrow function

// const addTwo = (num1, num2) =>  num1 + num2  // this is implicit return

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: 'rohan'})

console.log(addTwo(3, 4))
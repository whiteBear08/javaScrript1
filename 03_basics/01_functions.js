function sayMyName(){
    console.log('R')
    console.log('o')
    console.log('h')
    console.log('a')
    console.log('n')
}
// sayMyName()

// function addTwoNumbers(number1, number2){  // here the inputs are parameters
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){ 
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

addTwoNumbers(3, 4) // here the inputs are arguments
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")

const result = addTwoNumbers(3, 5)
// console.log("Result:",result)  // function has no return statement,
//  so it returns undefined by default


function loginUserMsg(username = "sam"){
    if(!username){a
        console.log('please enter a user name')
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg('Rohan'))
// console.log(loginUserMsg())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 500, 2000))

const user = {
    username: 'Rohan',
    price: 200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: 'sam',
    price: 300
})

const myNewArray = [200, 400, 599, 1000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 599, 1000]))
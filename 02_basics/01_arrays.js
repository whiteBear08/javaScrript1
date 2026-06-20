// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['Batman', 'Superman']

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1])

// Arrays methods

// myArr.push(3) // adds an element to the end of the array
// myArr.pop()  // removes the last element

// myArr.unshift(9) // adds an element to the beginning of the array
// myArr.shift()  // removes the first element

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)
// console.log(typeof myArr)

// slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3) // slice doesnt affect the array
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)  // splice affwects the original array
console.log("C", myArr)
console.log(myn2)
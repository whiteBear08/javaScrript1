const name = "bear"
const repoCount = 50

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('white-oc')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('b'))

const newString = gameName.substring(0, 4) // it doesnt accept negative input
//  like (-7, 4)
// console.log(newString)

const anotherString = gameName.slice(-7, 4)
// console.log(anotherString)

const newString1 = "  Bear  "
// console.log(newString1)
// console.log(newString1.trim())

const url = "https://bear.com/white%20bear"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('bear'))

console.log(gameName.split('-'))

const str = "I am good at sucking boobs"

const words = str.split(" ")
console.log(words[3])

const letter = str.split("")
console.log(letter[5])

const strCopy = str.split()
console.log(strCopy)

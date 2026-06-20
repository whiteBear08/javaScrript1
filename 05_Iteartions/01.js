// for loops

for(let i = 0; i < 10; i++){
    const element = i
    if(i==5){
        // console.log('5 is best number')
    }
    // console.log(element)
} 

// console.log(element)

for(let i = 0; i<10; i++){
    // console.log(`outer value ${i}`)
    for(let j = 0; j<10; j++){
        // console.log(`inner loop ${j} and outer loop ${i}`)
        // console.log(i + '*' + j + '=' + i*j)
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}

const myArray = ['flash', 'batman', 'superman']
// console.log(myArray.length)
for(let index = 0; index < myArray.length; index++){
    const element = myArray[index]
    // console.log(element)
}

// break and continue

// for(let i = 0; i<=20;i++){
//     if(i==5){
//         console.log('5 is best number')
//         break;
//     }
//     console.log(`the value of i is ${i}`)
// }
for(let i = 0; i<=20;i++){
    if(i==5){
        console.log('5 is best number')
        continue;
    }
    console.log(`the value of i is ${i}`)
}
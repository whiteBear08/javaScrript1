const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (item) {
//     console.log(item)
// } )

// coding.forEach( (item) => {
//     console.log(item)
// } )

function printMe(item){
    console.log(item)
}

// coding.forEach( printMe )

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: 'javascript',
        languagefileName: 'js'
    },
    {
        languageName: 'java',
        languagefileName: 'java'
    },
    {
        languageName: 'python',
        languagefileName: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(`langauage name is ${item.languageName} 
        and file name is ${item.languagefileName}`)
})
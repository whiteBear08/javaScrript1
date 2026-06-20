// const coding = ['js', 'ruby', 'java', 'python', 'cpp']


// const values = coding.forEach( (item) => {
//     // console.log(item)
//     return item
// })

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums)


// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )


// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    {title: 'book one', genre: 'fiction', publish: 1981, edition: 2004},

    {title: 'book two', genre: 'non-fiction', publish: 1992, edition: 2004},

    {title: 'book three', genre: 'history', publish: 1999, edition: 2004},

    {title: 'book foue', genre: 'non-fiction', publish: 1989, edition: 2004},

    {title: 'book five', genre: 'science', publish: 2009, edition: 2004},

    {title: 'book six', genre: 'fiction', publish: 1987, edition: 2004},

    {title: 'book seven', genre: 'history', publish: 1986, edition: 2004},

    {title: 'book eight', genre: 'science', publish: 2011, edition: 2004}

] 

let userBooks = books.filter( (bk) => bk.genre === 'history')
userBooks = books.filter( (bk) => {
    return bk.publish > 1995 && bk.genre === 'history'
})

console.log(userBooks)
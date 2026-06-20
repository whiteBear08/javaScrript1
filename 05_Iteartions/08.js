const myNums = [1, 2, 3, 4]

const initialValue = 0
// const myTotal = myNums.reduce( function(acc, currentValue) {
//     console.log(`acc: ${acc} and currentValue: ${currentValue}`)
//     return acc + currentValue
// }, initialValue)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal)

const shoppingCard = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    }
]

const priceToPay = shoppingCard.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay)
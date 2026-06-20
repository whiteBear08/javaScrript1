// const tinderUser = new Object() this is singleton object creation
const tinderUser = {} // this is object literal syntax

tinderUser.id = "123abc"
tinderUser.name = "rohan"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'rohan', 
            lastname: 'sharma'
        }
    }

}

// console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 1,
        email: "h2@gmail.com"
    },
    {
        id: 1,
        email: "h3@gmail.com"
    }
]
users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course = {
    course: 'ja in hindi',
    price: 999,
    courseInstructor: 'rohan sharma'
}

// course.courseInstructor

const{courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)

// {
//     "name": "rohan",
//     "coursename": "js in hindi",
//     "price": "free"
// }  


// [
//     {},
//     {},
//     {}
// ]  json


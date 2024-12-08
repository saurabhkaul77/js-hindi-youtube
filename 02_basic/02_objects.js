const mySymbol = Symbol("keys1")

const jsUser = {
    name :"saaurabh",
    "full name": "Saurabh Kaul",
    age: 18,
    [mySymbol]: "sym",
    location : "gwalior",
    lastLogin: ["Mondday","Tuesday"]
    
}

// console.log(jsUser.location)
// console.log(jsUser["location"])
// console.log(jsUser["full name"])
// console.log(jsUser)


// ===================================

// const user1 = new Object()
const user1 = {}

user1.id = "123qab"
user1.name = "saurabh"
user1.login = false

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Saurabh",
            lastName:"Kaul"
        }
    }
}
// console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const course = {
    courseN: "js in hindi",
    price: "999",
    courseI: "kaul"
}

const {courseI} = course
// console.log(courseI)

//                Jason
// {                            


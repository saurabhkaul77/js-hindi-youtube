const arr = [1,2,3,4,5]
// console.log(arr[4])

// arr.push(6)
// arr.unshift(7)
arr.shift()
// console.log(arr)

const arr2 = [1,2,3,4,5,6,7]
// console.log(arr2.slice(1,4))
// console.log(arr2)

// console.log(arr2.splice(1,4))
// console.log(arr2)


const marvel = ["thor", "spidy", "captain"]
const dc = ["batman", "lantern", "superman"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][2])

let third = marvel.concat(dc)
// console.log(third)

const four = [...marvel, ...dc]   //spread operator
console.log(four)



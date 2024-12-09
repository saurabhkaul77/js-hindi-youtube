// const coding = ["js","ruby","java","python"]

// const values = coding.forEach((item) => {
//     console.log(item)
//     return item
// })
// console.log(values)

// for each does not return value/


const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums =  myNums.filter((num)=> {
//         return num>4
// })
// console.log(newNums)



// const newNums = []
// myNums.forEach((num)=>{
//     if(num>5){
//         newNums.push(num)
//     }
// })



const newNums = myNums.map((num) => num*10)
                      .map((num)=>num+1)
                      .filter((num)=> num>=40)
console.log(newNums)


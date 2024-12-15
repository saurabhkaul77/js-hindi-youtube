const promiseOne = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Async task is completed');
    resolve()
  }, 1000);  
})

promiseOne.then(function(){
    console.log("Promise");  
})



new Promise(function(resovle, reject){
    setTimeout(function(){
        console.log("Async 2nd")
        resovle()
    },1000)
    
}).then(function(){
    console.log("2nd resolved");
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"a@gmail.com"})
    },1000)
})

promiseThree.then(function (user) {
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "kaul",pass:"123"})
        }else{
            reject("ERROR")
        }
    }, 1000);
})
const usernam  = promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((usernam)=>{
    console.log(usernam);  
}).catch(function(error){
    console.log((error));
}).finally(()=>{
    console.log("Finally executed");
    
})




const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript",pass:"123"})
        }else{
            reject("ERROR , something went wrong")
        }
    }, 1000);
});

async function consunePromFive(){
    try{
        const responce = await promiseFive
        console.log(responce);       
    }catch(error){
        console.log(Error);
        
    }
}
consunePromFive()


// async function getAllUsers(){
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await responce.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E:',error);
        
//     }
// }getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))



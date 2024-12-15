const user = {
    username:"kaul",
    loginCount: 8,
    signedIN: true,

    getUserDetails: function(){
        // console.log("Got details");
        console.log(`Username: ${this.username}`);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());


// constructor

function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("KAUL", 12,true)
const userTwo = new User("SAURABH", 11, true)
console.log(userOne);

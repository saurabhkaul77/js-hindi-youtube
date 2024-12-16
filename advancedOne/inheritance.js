class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);       
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)   
        this.email = email
        this.password = password
    }

    addCources(){
        console.log(`New cources added ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail.com","1234")
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()
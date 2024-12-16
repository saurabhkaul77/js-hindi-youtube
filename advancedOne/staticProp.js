class User{
    cosnstructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createID(){
        return `123`
    }
}
const kaul = new User("Kaul")
// console.log(kaul.createID())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const ip = new Teacher("iphone","iphone.com")
console.log(ip.logMe())                                                  
class User {
    constructor(name) {
        this.name = name;
    }
    sayHello(){
        console.log(this.name + ' Hello');
    }
}

const alex = new User('Alex');
console.log(alex);

class Person extends User {
    constructor(name, email){
        super(name);
        this.email = email;
    }
}

const li = new Person('Li', 'li@mail.ru');
console.log(li)
class User {
    constructor(name) {
        this.name = name;
    }
    sayHello(){
        console.log(this.name + ' Hello');
        return this.name
    }
}

const alex = new User('Alex');
console.log(alex);

class Person extends User {
    constructor(name, email){
        super(name);
        this.email = email;
    }
    sayHello2() {
        console.log(super.name);
        return super.name
    }
}

const li = new Person('Li', 'li@mail.ru');
console.log(li.sayHello())
console.log(li.sayHello2())

// get set

class User2 {
    constructor(name){
        this.name = name;
    }
}

const student = new User2('alex');

console.log(student)


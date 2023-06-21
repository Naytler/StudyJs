let user = {
    username: 'Ivan',
    _password: '',  //для получения set нужно _
    set password(pass){
        this._password = pass.trim(); //убирает пробелы из введенного текста
    },
    get password() {   //что бы выводить без _
        return this._password;
    }
};
user.password = '      qwerty ';  //{username: 'Ivan', _password: 'qwerty'}

console.log(user);   //{username: 'Ivan', _password: 'qwerty'}

let user2 = {};


// применяется getter b setter при присваивании к дргому объекту
user2 = user;
user2.password = ' 123  456  ';  //{username: 'Ivan', _password: '123  456'}

console.log(user2); //{username: 'Ivan', _password: '123  456'}



let user3 = {};
user3.__proto__ = user;
user3.username = 'Privet';
user3.password = ' 345 678    ';
console.log(user3);   //{_password: '345 678'}  

//что бы достать имя родительского имени при перезатирании user.username = 
console.log(user3.__proto__.username);  //Ivan
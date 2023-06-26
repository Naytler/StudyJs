const person = {
    name: 'Ivan',
    age: 67,
    addres: {
        street: 'Lenina',
        building: 9
    }
};

const{ age, name} = person;

console.log(age)
console.log(name);


let {balance = 10000, addres: {building}} = person;

console.log(balance);
console.log(building);



const{ addres, ...data} = person;


console.log(addres, data);

// {street: 'Lenina', building: 9}
// {name: 'Ivan', age: 67}


const copyPers = {...person};
console.log(copyPers)

//proto
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const ivan = new Person('Ivan', 37);
console.log(ivan.__proto__) //{constructor: ƒ}



const film = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Science fiction',
    duration: 148
  };
  
  function getFilmInfo(movie) {
     let fil = `Фильм: ${movie.title} \nРежжисер: ${movie.director}
     \nyear: ${movie.year}\ngenre: ${movie.genre}`
     return fil;
  }
  
  console.log(getFilmInfo(film));



  const person1 = {
    name: 'Ivan',
    age: 67
  }

  const entry = {
    id: 1078
  }

  console.log(person1);



  console.log(person1);

// перербор объектов

// оператор in позволяет определить свойство в объекте
console.log('name' in person1); //true


for(const prorp in person1){
     console.log(prorp); //name age
}

person1.prototype.type = 'human'


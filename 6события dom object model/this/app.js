
function abc(){
    console.log(3 + 5 / 2);
    this.style.color = 'red';
}

// document.querySelector('p').onclick = abc

// let p = document.querySelectorAll('p');
// p.forEach(function(e){
//     e.onclick = abc;
// })

let p = document.querySelectorAll('p');
p.forEach(function(e){
    e.addEventListener('click', abc);
})


//spread rest
//... расширение распостранение rest остаток

const normalWork = ['ingeneer', 'деловод', 'Tokar'];
const work = [...normalWork, 'youtuber', 'instagramm']; 
//(5) ['ingeneer', 'деловод', 'Tokar', 'youtuber', 'instagramm']
console.log(work)



const worker = {
    'name' : 'alex',
    'job' : 'bloher'
}

const macduk = {
    ...worker,
    'position': 'clean manager'
}
//{name: 'alex', job: 'bloher', position: 'clean manager'}
console.log(macduk);


//rest
const num = (...args) => {
    console.log(args);
}
num(1,2)

//деструктуризация

const ar = [33,4,5,6,7,10,8,9,0];
const [d1,,d2] = ar;
console.log(d1,d2);  //33 5


const {name, position} = macduk;
console.log(name,position)
//alex clean manager


const user = {
    use: 'John',
    age: 30,
    city: 'New York'
  };

  
  const {use, age, city} = user;
  // Ваш код здесь
  
  console.log(use); // 'John'
  console.log(age); // 30
  console.log(city); // 'New York'
    

  // Необходимо поменять значения двух переменных местами с помощью деструктуризации
let a = 10;
let b = 20;

[a,b] = [b,a]
// Ваш код здесь

console.log(a); // 20
console.log(b); // 10


const numbers = [1,2,3,4,5,6]

const [u,y,c] = numbers;

console.log(u);
console.log(y)
console.log(c)

const arrr = [1,2,3,4,5,6,7];

// const [first,second,...rest] = arrr;

// console.log(first)
// console.log(second)
// console.log(rest)


// Необходимо извлечь значения свойств вложенного объекта и присвоить их переменным с помощью деструктуризации
const user2 = {
    jack: 'John',
    age1: 30,
    address: {
      city1: 'New York',
      country: 'USA'
    }
  };
  
  const {jack,age1,address:{city1}} = user2
  // Ваш код здесь
  
  console.log(jack); // 'John'
  console.log(age1)
  console.log(city1); // 'New York'
//   console.log(country); // 'USA'


// Необходимо извлечь первый и третий элементы массива, возвращаемого функцией, и присвоить их переменным с помощью деструктуризации
function getNumbers() {
    return [1, 2, 3, 4, 5];
  }
  
  const [first1,,third2] = getNumbers()
  // Ваш код здесь
  
  console.log(first1); // 1
  console.log(third2); // 3


  // Необходимо извлечь значения свойств объекта, при этом присвоить значения по умолчанию для отсутствующих свойств с помощью деструктуризации
const user3 = {
    name3: 'John',
    age3: 30
  };
  
  const {name3, age3, city3} = user3
  // Ваш код здесь
  
  console.log(name3); // 'John'
  console.log(age3); // 30
  console.log(city3); // 'Unknown'


  // Необходимо извлечь первый и третий элементы массива и пропустить значения второго и четвёртого элементов с помощью деструктуризации
const numbers2 = [1, 2, 3, 4, 5];

// Ваш код здесь
const [first2,,third3] = numbers2

console.log(first2); // 1
console.log(third3); // 3



const arr1 = [1,2,3];
const arr2 = [4,5,6];

const result = [...arr1,...arr2];
console.log(result) //(6) [1, 2, 3, 4, 5, 6]

const originalArray = [1,2,3];
const copyArray = [...originalArray];
console.log(copyArray)


const numbers4 = [1, 2, 3, 4, 5];

const [fir,sec,...rest] = numbers
// Ваш код здесь

console.log(rest); // [3, 4, 5]


// Необходимо передать аргументы в функцию с помощью оператора spread
function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers6 = [1, 2, 3];
  
  // Ваш код здесь
  let result3 = sum(...numbers6)
  
  console.log(result3); // 6
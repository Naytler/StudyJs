
//уникальность всех символов в строке что бы они не повторялись 
// // вариант 1
// function isUnique(string){
//     for(let i = 0; i < string.length; i++){
//         const char = string[i];
//         if(string.lastIndexOf(char) !== i){
//             return false;
//         }
//     }

//     return true;
// }

// вариант 2

// function isUnique(string){
//     const set = new Set()
//     for(let i = 0; i < string.length; i++){
//         const char = string[i];

//         if(set.has(char)){
//             return false;
//         }
//         set.add(char);
//     }

//     return true;
// }


// // вариант 3
// function isUnique(string){
//     return new Set(string).size === string.length;    //сет берет и делает каждый символ уникальным
// }

// console.log(isUnique('abcdef')); //true
// console.log(isUnique('1234567')); //true
// console.log(isUnique('abcABC')); //true
// console.log(isUnique('abcadef')); //false



// javascript all about map set weak map, weakset

const obj = {
    name: 'vladlen',
    age: 26,
    job: 'fullstack'
}

const entries = [
    ['namr', 'vladilen'],
    ['age',26],
    ['job','fullstack']
]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));
// map

const map = new Map(entries);


map
    .set('newField', 42)
    .set(obj, 'value of object')
    .set(NaN, "NaN??");


// map.delete('job');  //удаляет
// console.log(map.has('job')); // проверяет есть ли job в мапе
// console.log(map.size);   //размер мапа
// map.clear();  // удляет весь мап

// console.log(map);

// for(let [key, value] of map){
//     console.log(key, value);
// }

// for(let val of map.values()){
//     console.log(val);
// }


// for(let key of map.keys()){
//     console.log(key);
// }

// map.forEach((val, key, m) => {
//     console.log(val, key)
// })

// const array = Array.from(map)

// const mapObj = Object.fromEntries(map.entries());

// console.log(array);
// console.log(mapObj);



// =======================
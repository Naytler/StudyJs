const map1 = new Map();
console.log(map1);

map1.set('a', 11);
map1.set('b', 21);
map1.set('c', 31);

console.log(map1);

// for(const item of map1) console.log(item)

console.log(map1.get('c'));
console.log(map1.has('b'));
console.log(map1.delete('b'))
// console.log(map1.clear())
console.log(map1) //Map(2) {'a' => 11, 'c' => 31}


console.log(map1.values())   //{11, 31}
console.log([...map1.values()]) //[11, 31]

let numbers = [1,2,3,4,5];
let number1 = numbers.map(num => num + 1);
console.log(number1)

let str = 'hello world';
let charArr = Array.from(str).map(char => char.toUpperCase())
console.log(charArr)

console.log(str.split(''))
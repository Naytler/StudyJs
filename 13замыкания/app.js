

let a = 10;

function f1(){
    console.log(a);
}
f1();

function f2(){
    let a = 33;
    console.log('local = '+ 33)
}
f2()



//примеры когда переменные нужны снаружи
//замыкание когда создается функция внутри которой создается другая функция
// и она замыкает данные первой функции
function createStep(n = 0) {
    let count = n;
    return function (){
        count++;
        console.log(count)
    }
}

let step1 = createStep()
let step2 = createStep(200);
step1()
step1()
step1()
step1()

step2()
step2()


//задача на попрошайку

function randomInteger(min, max){
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand)
}
console.log(randomInteger(0, 100))

function createBeggar(){
    let s = 0
    return function beggar(){
        s += randomInteger(0,100)
        console.log(s);
        if(s > 250) return;
        beggar()
    }
}
let crea = createBeggar();

// crea()



let p;






function createIncrement() {
    let count = 0;
    function increment(){
        count++
    }
    
    function log() {
        let message = `Count is ${count}`;
        console.log(message)
    }
    
    return [increment, log];
}

const [increment,log] = createIncrement();

increment()
increment()
increment()
log()



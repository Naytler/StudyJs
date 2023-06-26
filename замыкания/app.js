

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

function recurs(n,x){
    return recurs(n-2,x-1)
}

recurs(7,6);


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



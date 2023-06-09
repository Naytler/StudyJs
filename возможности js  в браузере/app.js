// как браузер отрисовывает страницу
// 1 построение DOM html дерева
// 2 css построение 


// Если браузер видит тег <script> , то он по стандарту обязан:
// — Загрузить файл скрипта (если есть атрибут src );
// — Выполнить его;
// — Показать оставшуюся часть страницы.

// Если скрипт – синхронный, то, пока браузер не выполнит его, он не
// покажет часть страницы под ним.
// Решить эту проблему помогут атрибуты async или defer . Оба
// атрибута никак не влияют на встроенные в HTML скрипты, т.е. на те, у
// которых нет атрибута src

// атрибут defer асинхронный дает порядочность загружаемой страницы
// используют когда один скрипт зависит от другого загружает данные из первого
// <script src="app.js" defer></script>
// <script src="app2.js" defer></script>
// Скрипт second.js , даже если загрузился раньше, будет ожидать
// выполнения синхронной части кода из first.js


// скрипт выполняется ассинхронно то есть при обнаружении async браузер не останавливает
// обработку страницы а работается дальше пока не загрузится вся страница
// <script src="app.js" async></script>
// <script src="app2.js" async></script>


//setTimeout позволяет отложить выполнение на n милисикунд
//setInterval поволяет запускать функцию каждые N милисикунд
// clearTimeout clearInterval отменяют вышестоящие функции

// let x = document.querySelector('.clik');
// x.onclick = function(){
//     console.log('клик');
// };

// let y = document.querySelector('.square');
// function cli(){
//     y.onclick = function(){
//         console.log('cli')
//     }
// }



// let countDown = document.getElementById('chang').innerHTML = 'hey';


// дз сделать таймер который доходит до 0 и выводит hey
function update(){
    let x = document.querySelector('.chang').textContent;
    document.querySelector('.chang').innerHTML = x-1
    y = x - 1;
    x = y;
    if(x == 0){
        clearInterval(int);
        return console.log('hey')
    }
}
let int = setInterval(update, 10);

// Увеличивайте значение счётчика при каждом клике на печеньку
// Чередуйте уменьшение и увеличение печеньки при каждом клике (уменьшайте и увеличивайте значения width/height)
let touch = document.querySelector('.logo');
let coun = document.querySelector('.game__count');

touch.addEventListener('click', clickPlus)

function imagesBig(){
    touch.width = '91';
}

let count = 0
function clickPlus(){
    count++;
    coun.innerHTML = `${count}`;
    touch.width = '150';
    setTimeout(imagesBig, 100);
}

let cathc = () => {
    divCont.remove();
}

let divCont = document.querySelectorAll('.game3 div');
console.log(divCont)


let get = document.querySelector('.animal');
console.log(get.parentElement); //нашел первый родительский элемент

const parent = get.closest('.game3'); //ищет родителя с определенным класом
console.log(parent)


// -------html  collection
const p = document.getElementsByTagName('p');
console.log(p)//HTMLCollection(2) [p.text, p.game__text]

//преобразовываем в массив
const arr = Array.from(p);
console.log(arr)  //(2) [p.text, p.game__text]

const arr2 = [...p];  //метод распостронения
console.log(arr2) //(2) [p.text, p.game__text]

const div = document.querySelectorAll('div');
console.log(div)


//преобразовать массив в объект

let arrat = [
    {key: 'Name', value: 'John'},
    {key: 'age', value: 25},
    {key:'city', value: 'Taganrog'},
];
// через reduce 
const obj = arrat.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
});
console.log(obj); //{key: 'Name', value: 'John', age: 25, city: 'Taganrog'}

// через forEach;
const obb = {};
arrat.forEach(item => {
    obb[item.key] = item.value;
});
console.log(obb) //{Name: 'John', age: 25, city: 'Taganrog'}

let elem = document.querySelector('.hole');
console.log(elem.textContent)   //пустота

elem = 'поменял'
console.log(elem)  //поменял

const counterr = () => {
    let count = document.getElementById('counterr');
    count.textContent += 1;
    console.log(count);
}

setInterval(counterr, 10000);
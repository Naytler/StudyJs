document.addEventListener('DOMContentLoaded', (e) => {
    console.log(e.type);
});
window.addEventListener('load', (e) => {
    console.log(e.type);
})

// найти data атрибут в селекторе
// element.getAttribute() позволяет получить значение любого атрибута элемента;
// element.setAttribute(name, value) позволяет установить любое значение любому
// атрибуту элемента;

const div = document.querySelector('div');
console.log(div.dataset)  //DOMStringMap {value: 'value'}

// добавить дата атрибут
div.dataset.next = 'next';
console.log(div.getAttribute('data-next'));  //next


                // работа с классами
//classname свойство  хранит все классы в виде одной строки с пробелами
//classList для олее удобного сохранения классов в одном объекте используется 

// методы объекта classList
// add()        добавление класса
// remove()     для удаления
// contains()   для проверки есть ли такой класс
// toggle()     для переключения класса добаляет если нет и удаляет если есть.

// добавляем классы в html 
// для каждого forEach/ 
const button = document.querySelectorAll('button');
button.forEach(button => {
    button.classList.add('red')
});

// добавить стили через js 
const but = document.querySelector('button');
but.style.color = 'black';
but.style.backgroundColor = 'blue'; //которые в css пишут через дефис тут верблюжим стилем


                    //определение размеров и позиции элементов
but.getBoundingClientRect()
console.log(but.getBoundingClientRect()) //DOMRect {x: 8, y: 8, width: 100, height: 50, top: 8, …}

function isVisible(el){
    const{top , bottom} = el.getBoundingClientRect();
    if(bottom < 0){
        console.log('элемент не виден')
    }
    if(top > window.innerHeight){
        console.log('так же не виден в области')
    }
    return true;
}

setInterval(() => {
    isVisible(but)
},1000);   //8app.js:47 элемент не виден



                //навигация по элементам 
// parentElement            родительские элементы
//closest                   принимает електор ближайщий родительский или соседний
// previousElementSibling    предыдущий соседний элемент
// nextElementSibling        следующий соседний элемент  
// firstElementChild         первый дочерний элемент
// lastElementChild          последний дочерний элемент
// children                 ко всем дочерним элементам

let header = document.querySelector('.header__nav');
console.log(header.children); //HTMLCollection(4) [button.red, button.red, button.red, button.red]
let red = document.querySelector('.red');
console.log(red.parentElement); //<nav class='header'></nav>
console.log(red.parentElement.parentElement);   //<div class="container">

        //дерево узлов

//parentNode — узел-родитель;
// previousSibling , nextSibling — предыдущий и следующий узел;
// firstChild , lastChild — первый и последний дочерний узел;
// childNodes — все дочерние узлы


//Element.textContent — содержит весь текст внутри элемента.
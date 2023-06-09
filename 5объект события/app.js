// // события определения виды примеры
// click клик на лк мыши
// contextmenu - клик на пк мыши
// mouseover - мышь наводится на элемент;
// mouseout - событие возникает, когда указатель мыши покидает элемент.
// mousedown - событие возникает при нажатии кнопки мыши на элементе.
// mouseup - событие возникает при отпускании кнопки мыши на элементе. События клавиатуры:
// dblclick двойное нажатие мыши
// /Событие, которое происходит при прокрутке страницы, называется onscroll

//----самые распостраненые 
// keydown нажимаем на клавиатуру
// keyup отпускаем клаву

// события форм и элементов
// focus  - когда элемент в фокусе
// blur   - когда теряет фокусе
// submit  - когда отправляем форму
// input - событие возникает при изменении значения элемента формы.
// change - событие возникает при изменении значения элемента формы и его потере фокуса.



                        'обработчики событий '
                        //так можно повесить один обработчик
let cli = document.querySelector('.clikc').onclick = () => {
    console.log('button was ckicked');
}
let rclic = document.querySelector('.contexmenu').oncontextmenu = () => {
    console.log('button was clicked right button');
}
let mouse = document.querySelector('.mouse').onmouseover = () => {
    console.log('mouse come');
};

                'через addEventListener много '

clickc = document.querySelector('.clikc');
// clickc.addEventListener('click', function)
let func = () => {
    console.log('hey');
}
clickc.addEventListener('click', func);

//для удаления обработчика 
clickc.removeEventListener('click',func);

                        ' контекс обработчика this'

// This всегда является ссылкой на свойство объекта, но какой это объект, зависит+
// от контекс
// Если вы попытаетесь обратиться к ключевому слову this в глобальной области
// видимости, оно будет привязано к глобальному контексту, то есть к объекту window
// в браузере.
// Когда this используется внутри объекта, это ключевое слово ссылается на сам объект.

clickc.addEventListener('click', function(){
    console.log(this);  //<button class="clikc">click</button>
});
function Person(name){
    this.name = name;
}
const person = new Person('artur');
console.log(person); //Person {name: 'artur'}
console.log(person.name);   //artur


                        'объект события'

// event.type  -- тип события
// event.target        -- ссылка на объект который был инициатором события
// event.currentTarget     -- элемент на котором сработал обработчик
// event.clientX/Y        --координаты курсора в момент слика


                    'события клавиатуры'

// keydown   //  -- нажатие клавиатуры
// keyup     //  -- отпуск клавиатуры

// свойства keyboardevent 
// code    //  - содержит информацию о том какая клава нажата на клаве
// key     // - содержит напечатанный символ с учетом раскладки клавиатуры
//repeat  // отслеживаем зажатие клавищи если зажал то будет false на первом на остальны true


// altKey     даст true если альт нажат и т.д
// shiftKey
// ctrlKey

const text = document.querySelector('textarea');
let kee = (e) => {
    console.log(e.type, e.target); //keydown
    console.log(e.code);  //KeyQ
    console.log(e.key ,e.repeat);  //q
    console.log(e.clientX);
}
text.addEventListener('keydown',kee);
text.addEventListener('keyup',kee);
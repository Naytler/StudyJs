{/* <input type="text" id="name" name="name" placeholder="ФИО">
<input type="select">
<input type="radio">
<input type="checkbox">
<input type="textarea"></input> */}


//trim() удаляет пробелы с ничала и конца строки


//события текстового поля
// focus   
// blur  затемняет если ббыл потерян фокус
// change меняет фокус в поле если данные были изменены

let namer = document.querySelector('#name');
const div = document.querySelector('.hint');
namer.addEventListener('focus', () => {
    div.classList.remove('hide');
})
namer.addEventListener('blur', () => {
    div.classList.add('hide');
})

namer.addEventListener('input',() => {
    if(namer.value.includes('@')){
        div.classList.add('hide')
    }else{
        div.classList.remove('hide')
    }
})


//           получаем изначальный элемент в selected
let countryes = document.querySelector('#country');
countryes.value = 'England' 
// или 
countryes.selectedIndex = 3;  //poland

//что бы поменять значение в selected
let selected = document.querySelector('select');
selected.addEventListener('change', () => {
    console.log(selected.value)
    console.log(selected.selectedIndex)
});

let btn = document.querySelector('.option');
btn.addEventListener('click', () => {
    selected.selectedIndex = (selected.selectedIndex + 1) % selected.options.length;
    console.log(selected.value)
    console.log(selected.selectedIndex)
})

//          события radio
// нужно общее имя name = 'type' что бы они были связаны
/* <input type="radio" name="1" checked>
<input type="radio" name="1">
<input type="radio" name="1"> */
document.querySelector('#family').checked = true

// самое важное значение change 
const inputs = document.getElementsByName('1');
for(const radio of inputs){
    radio.addEventListener('change', (e) =>{
        console.log(e.currentTarget.value)
    })
}

// делаем изменение по нажатию на кнопку
const btnRad = document.querySelector('.radio');
btnRad.addEventListener('click', () => {
    const current =  Array.from(inputs).findIndex((el) => el.checked)
    inputs[(current + 1) % inputs.length].checked = true
    console.log(inputs)
})


//          события флагов checkbox
const checkbox = document.getElementById('isAgree')
checkbox.addEventListener('change',() => {
    console.log(checkbox.checked)
})


//блокируем checkBox
//disabled блокирует
const block = document.querySelector('.block')
block.addEventListener('click', () => {
    checkbox.disabled = !checkbox.disabled

    block.textContent = checkbox.disabled ? 'разблокировать' : 'заблокировать'
})


// const checkbox = document.getElementsByName('isAgree')
// всем поставить слушатель
// for(const check of checkbox){
//     check.addEventListener('change',() => {
//         console.log(check.checked)
// })};





//                  формы страницы html document.from

//submit - событие отправки кода на сервер
//reset - событие отчисти формы полей
// так получают формы 
/* <form name="register-form">
    <!...>
</form> */
// const form = document.forms['register-form']; 
//  либо через id document.getElementById('');


// отправка

// form.addEventListener('submit', event => {
    //тут обработка для отправки
// })
// при отправке на сервер элемент button долже не иметь типа либо type="submit"


// очистка программно

// document.forms['register-form'].addEventListener('submit',event => {
//     event.preventDefault;
    //обработка полей формы передача на сервер при необходимости
//     const form = event.currentTarget;
//     form.reset();
// })

const form = document.forms.Registration

form.addEventListener('submit',(e) => {
    // e.preventDefault() //если не хотим никуда отправлять берем этот метод
})

// form.addEventListener('reset',(e) => {
    // e.preventDefault() //если не хотим очищать через кнопку
// })




///             валидация полей форм при помощи checkValidity
// валидация полей это проверка текста в поле на ограничения
// minlength - мин длина символов
// maxlength - макс длина символов
// min       -  минимальное значение для input type='number';
// max       -  максимальное значение для input type='number';
// required  -  является ли поле обязательным
// pattern   - проверка поля на соответсвие регулярному выражению
/* 
<form>
    <label>
        введите число от 3 до 6
        <input type="number" id="number" min="3" max="6">
    </label>
    <button>отправить</button>
</form> */

const inputt = document.getElementById('number')

inputt.addEventListener('input',() => {
    if(!inputt.checkValidity()){
        console.log('валидация не прошла');
    }
})


//Метод trim() в строке 5 удаляет пробельные символы с начала и конца строки, и мы
// записываем новое значение в поле e-mail.


// событие input   возникает каждый раз, когда мы вводим
// новый символ, удаляем символ или ещё как-то меняем введенное значение
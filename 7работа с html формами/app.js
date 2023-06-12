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
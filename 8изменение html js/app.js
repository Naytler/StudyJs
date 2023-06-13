//innerText  ---изменить содержимое текста
//outerText  ---изменяет текст вместе с тегом

// изменить содержимое текста
const p = document.querySelector('p');
// p.innerText = 'новый текст';   // p новый текст p

//изменяет текст вместе с тегом
// p.outerText = 'new text';  //header new text header

p.outerHTML = '<div>создает новый див</div>';
p.innerHTML = '<div>создает новый див</div>';



//          добавление html разметки
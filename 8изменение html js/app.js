//innerText  ---изменить содержимое текста
//outerText  ---изменяет текст вместе с тегом

// изменить содержимое текста
const p = document.querySelector('p');
// p.innerText = 'новый текст';   // p новый текст p

//изменяет текст вместе с тегом
// p.outerText = 'new text';  //header new text header

p.outerHTML = '<div>создает новый див</div>';
p.innerHTML = '<div>создает новый див</div>';



//          добавление html разметки когда замена всех элементов не подходит
// insertAdjacentText()     добавляют текс в позицию другого элемента
// insertAdjacentElement()  добавляют элемент в позицию другого элемента


const li = document.getElementsByTagName('li');
li[0].insertAdjacentHTML('beforeBegin', '<li>Ноль</li>');
li[2].insertAdjacentHTML('beforeend','<b>2</b>')




        //        созане HTML элементов
// createElement()  создает элемент в дом дереве
// createTextNode() создает текстовый узел

//li.appendChild(div)  добавляем элемент в конец родительского элемена
//li.append('some text') добавляет текс
//ul.insertBefore 
let ul = document.querySelector('ul');
let li1 = document.querySelector('li');
li1.textContent = 'Null';

ul.insertBefore(li1, ul.firstElementChild);

const li2 = document.createElement('li');
li2.textContent = 'last';
ul.appendChild(li2);


// ul.insertBefore(document.createTextNode('втсавляемый текст'),ul.children[0]);



//                      удаление html елементов
li2.remove();


//                  замена и клонирование элементов
// replaceChild()
// replaceWith();   полностью удаляет и на его месте устанавливает новый

// cloneNode(true) полное клонирование
// cloneNode(false) клонирование без дочернх элементов

document.body.appendChild(ul.cloneNode(true));
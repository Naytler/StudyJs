function f1(){
    console.log(1);
}
function f2(){
    console.log(2);
}
function f3(){
    console.log(3);
}
function f4(){
    console.log(4);
}

const b1 = document.querySelector('.one');
const b2 = document.querySelector('.two');

//добавление событий
// b1.onclick = f1;
// b2.addEventListener('click',f2);

//2 добавление двух функций

b1.onclick = f1;   //затирается 
b1.onclick = f3;   // перезаписывает
b1.onclick = function(){
    f1();
    f3();
};  // так добавляет 2 функции

b2.addEventListener('click',f2);
b2.addEventListener('click',f4); //выводит оба

//3 удаление события

b1.onclick = null; //удаляет все функции без разбора
b2.removeEventListener('click', f2);


//4 запуск события один раз
b1.onclick = () => {
    f1();
    b1.onclick = null;
};

b2.addEventListener('click', f2, {
    once : true
});



//5 удаление всех событий
b1.onclick = null;

b2.removeEventListener('click', f2) //удалять надо каждый отдельно
b2.removeEventListener('click', f4);



//6 анонимные функции
b1.onclick = () => {
    f1();
};
b1.onclick = null;
//add не возможно удалить 
b2.addEventListener('click', function(){
    f2();
});
b2.removeEventListener('click', function(){
    f2();
});   ///не удаляет
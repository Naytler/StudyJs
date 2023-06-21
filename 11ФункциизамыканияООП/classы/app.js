//КЛАССЫ позволяют писать более лаконичный код это более совремнный стиль написания
function myAlert(a, c, d){
    let b = `<p class='${c}'>${a}</p>`;
    document.querySelector(d).innerHTML = b;
}
myAlert('HI', 'red', '.test');
myAlert('Hello', 'orange', '.test2');

// переводим код выше на ооп
//class это шаблон набор штампов

let m = new Alert('My message', 'red', '.test');
console.log(m);
m.showAlert();

let m2 = new Alert2('My message', 'red', '.test', 'instagram.svg');
m2.showAlertIcon();
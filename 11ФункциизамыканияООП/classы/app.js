//КЛАССЫ позволяют писать более лаконичный код это более совремнный стиль написания
function myAlert(a, c, d){
    let b = `<p class='${c}'>${a}</p>`;
    document.querySelector(d).innerHTML = b;
}
myAlert('HI', 'red', '.test');
myAlert('Hello', 'orange', '.test2');

// переводим код выше на ооп
//class это шаблон набор штампов

class Alert {
    constructor(a,c,d){
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert(){
        document.querySelector(this.out).innerHTML = `<p class='${this.cssClass}'>${this.message}</p>`
    }
}

let m = new Alert('My message', 'red', '.test');
console.log(m);
m.showAlert();
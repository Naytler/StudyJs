// lockalStorage длительно хранит инфу на клиенте в виде пары ключ : значение являющиеся строками
localStorage.setItem('lastName','Ivanov') //запись данных методом setItem
localStorage.lastName = 'сидоров'; // либо через свойство

//для чтения сохранненыхзначений доступно 2 варианта  getItem
let lastName = localStorage.getItem('lastName');
console.log(localStorage.lastName); //сидоров

// .length хранит текущее кол-во ключей сохраненные в localStorage

//удаление записей  clear(удаляет все записи)  and  delete
localStorage.removeItem('user');
delete localStorage.user;


//создаем страницу которая запращивает имя и в дальнейшем запоминает нас

// в последующем действии проверяем есть ли имя
const storedName = localStorage.getItem('name');

if(storedName){
    document.querySelector('div').textContent = `привет ${storedName}`;
}else{
    // узнаем имя и записываем в память
    const name = prompt('what is your name');
    localStorage.setItem('name', name);
}


                                //json  
// хранилище данных при использовании localStorage не можем работать с
// js объектами или массивами для этого и сделали json

// stringify - для серилизации объектов в строки
// parse     - для десерилизации строк в объекты


const user1 = {
    id: 1,
    name : 'Name',
    email: '@mai.ru'
};

function saveObject(key, obj){
    localStorage.setItem(key, JSON.stringify(obj));
}

saveObject('user', user1); //храниться в application/localstorage

function restoreObject(key){ //что бы программа не ломалась оборачиваем в try catch
    try{
        return JSON.parse(localStorage.getItem(key)); //{id: 1, name: 'Name', email: '@mai.ru'}
    }catch{
        return null;
    }
}

console.log(restoreObject('user'));


                    // document.cookie
// cookie - это пары строк ключ значение которые сохраняются даже после закрытия 
// браузера
document.cookie = 'firstname = ivan';
document.cookie = 'lastame = ivanov';

//не перезаписывает а получает новую
document.cookie = 'user=' + encodeURIComponent('ivan sergeevich Ivanov; 1945г'); 

//получение значения cookie;
console.log(document.cookie);

function setCookie(name, value){
    document.cookie = name + '=' + encodeURIComponent(value)
}

setCookie('Имя','Иван');
console.log(document.cookie);

function readCookie(name){
    const cookie = pairs
}

// ● Expires — определяет время жизни куки. Если не указывать, то куки
// исчезнет после закрытия браузера;
// ● Path — для какого пути (и всех путей, начинающихся на этот путь) куки
// будет автоматически подставляться в запрос. Если не указано, значит,
// берётся текущий путь;
// ● Domain — домен, на котором доступна куки. Можно указывать текущий
// домен или поддомены. Если не указано, то будет взят текущий домен.
// Если как в примере (с точкой в начале), то куки установлена для домена
// и всех поддоменов.


//Удалить куки явно нельзя, но можно установить ей дату окончания
// существование в далёкое прошлое, и браузер удалит такую куку
// автоматически, например:
// document.cookie = 'name=; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
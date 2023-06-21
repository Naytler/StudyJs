// конструкторы позволяют создавать однотипные объекты и не создавать ошибок
//конструктор это функция которая инкапсулирует в себе логику создания объектов определенного вида

function createProduct(id, price, name, category){
    return {
        id,
        price,
        name,
        category,
    };
}

const tShirt = createProduct(280, 340, 'No Name t-shirt', 't-shirt');
console.log(tShirt);//{id: 280, price: 340, name: 'No Name t-shirt', category: 't-shirt'}

const iphone = createProduct(281, 10000, 'iPhone 11','mobile');
console.log(iphone); //{id: 281, price: 10000, name: 'iPhone 11', category: 'mobile'}

//оператор new выполняет роль синтаксического сахара при создании объектов
//создает новый оъект
// ключевое слово this получает ссылку на этот объект
// возвращается this без return 
function Product(id, price, name, category){
    this.id = id;
    this.price = price;
    this.name = name;
    this.category = category;
}

const car = new Product(282, 80000, 'Vaz', 'Car');
console.log(car); //Product {id: 282, price: 80000, name: 'Vaz', category: 'Car'}


//добавление еще одного this в уже созданный объект
car.discont = 50;
console.log(car); //Product {id: 282, price: 80000, name: 'Vaz', category: 'Car', discont: 50}

// прототипы

const person = {
    name: 'john',
    age: 45,
}
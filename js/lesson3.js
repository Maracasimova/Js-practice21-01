/**
*? Напиши функцию конструктор User для
*? создание пользователя со следующими свойствами:
*? a. userName - имя, строка
*? b. age – возраст, число
*? c. numbersOfPost – количество постов, число
*? d. класс ожидает 1 параметр – объект настроек с одноименными свойствами

*? Добавь метод getInfo(), возвращающий строку:
*? `Пользователю ${имя} ${возраст} лет и у него ${количествоПубликаций} публикаций.`

 */

// const User = function (obj) {
//     const { userName, age, numberOfPost } = obj;
//     this.userName = userName;
//     this.age = age;
//     this.numberOfPost = numberOfPost;

//     this.getInfo = function () {
//         return  `Пользователю ${this.userName} ${this.age} лет и у него ${this.numberOfPost} публикаций.`
//     }
// }

// const student = new User({ userName: "Petya", age: 21, numberOfPost: 5 });
// console.log(student.getInfo())


/**
 *? Напиши функцию конструктор Storage создающий объекты
 *? Для управления складом товаров.
 *? При вызове будет получать один агрумент – начальный массив товаров ["apple", "banana", "mango"],
 *? и записывать его в свойство items.
 *? Добавь методы класса:
 *? getItems() – возвращайте массив товаров
 *? addItems(item) - получает новый товар и добавляет его к текущим
 *? removeItem(item) – получает товар и, если он есть, удаляет его из текущих
 */

// const Storage = function (items) {
//     this.items = items;

//     this.getItems = function () {
//         return this.items;
//     }

//     this.addItems = function (item) {
//         this.items.push(item);
//     }

//     this.removeItem = function (item) {
//         const index = this.items.indexOf(item);
//         if (index !== -1) {
//             this.items.splice(index, 1);
//         }
//     }
// }

// const frutsItems = new Storage(["apple", "banana", "mango"]);
// console.log(frutsItems.removeItem("banana"));
// console.log(frutsItems.addItems("kiwi"));

// console.log(frutsItems.getItems());



/**
 *? Напиши класс Client создающий объект
 *? со свойствами login email
 *? Объяви частные свойства #login #email,
 *? доступ к которым сделай через геттер и сеттер login email
 */


// class Client {
//     #email;
//     #login;
//     constructor(email, login) {
//         this.#email = email;
//         this.#login = login;
//     }
//     get getEmail() {
//         return this.#email;
//     }
//     get getLogin() {
//         return this.#login;
//     }

//     set setEmail(newEmail) {
//         this.#email = newEmail;
//     }

//     set setLogin(newLogin) {
//         this.#login = newLogin;
//     }


// }
// const newClient = new Client("vasea@gmail.com", "vasea")

// console.log(newClient.setEmail = "ususu");

// console.log(newClient);



// Создать класс Worker, обладающий свойствами name, age, salary.
//У класса Worker есть метод getSalary.
//Создать класс TopLevelWorker, у которого есть свойство hierarchyLevel
//и наследующий класс Worker, добавляя метод getHierarchyLevel

const HIERARCHY_LEVEL = {
  TOP: "top",
  BOTTOM: "bottom",
};

const workerObj = {
  name: "Mango",
  age: 30,
  salary: 5000,
};

class Worker {
    constructor({ name, age, salary }) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

class TopLevelWorker extends Worker {
  constructor(level, { name, age, salary }) {
    super({ name, age, salary });
    this.hierarchyLevel = level;
  }
    getHierarchyLevel() {
      return this.hierarchyLevel;
  }
}

const alex = new Worker({name:"Alex", age:30, salary: 10000});
console.log(alex);
console.log(alex.getSalary());

const topAlex = new TopLevelWorker(HIERARCHY_LEVEL.TOP, workerObj);
console.log(topAlex);

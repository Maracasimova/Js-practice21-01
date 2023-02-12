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
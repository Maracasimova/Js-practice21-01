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

const User = function (obj) {
    const { userName, age, numberOfPost } = obj;
    this.userName = userName;
    this.age = age;
    this.numberOfPost = numberOfPost;

    this.getInfo = function () {
        return  `Пользователю ${this.userName} ${this.age} лет и у него ${this.numberOfPost} публикаций.`
    }
}

const student = new User({ userName: "Petya", age: 21, numberOfPost: 5 });
console.log(student.getInfo())
/**
//  *? Напиши скрипт, который для объекта user,
//  *? последовательно:
//  *? 1 добавит поле mood со значением 'happy'
//  *? 2 заменит hobby на 'skydiving'
//  *? 3 заменит значение premium на false
//  *? 4 выводит содержимое объекта users в фортмате
//  *? ключ:значение используя Object.keys() и for...of
//  */

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const array = Object.keys(user);
// for (const key of array) {
//     console.log(`${key}:${user[key]}`);
// }


// !2=====================================


/**
 *? У нас есть объект, в котором хранятся зарплаты
 *? нашей команды
 *? Напишите код для суммирования всех зарплат и
 *? сохраните его результат в переменной sum.
 *? Если объект salaries пуст, то результат должен быть 0
 */

//

// 3=====

/**
 *? Напишите ф-цию calcTotalPrice(stones, stonesName),
 *? которая принимает массив объектов и
 *? строку с названием камня.
 *? Функция считает и возвращает общую стоимость камней
 *? с таким именем, ценой и количеством из объекта
 */

//const stones = [
// { name: "Изумруд", price: 1300, quantity: 4 },
// { name: "Бриллиант", price: 2700, quantity: 6 },
// { name: "Сапфир", price: 400, quantity: 7 },
// { name: "Щебень", price: 150, quantity: 100 },
//;
//
//
//onst calcTotalPrice = (stones, stonesName) => {
//
// for (const stone of stones) {
//   if (stonesName === stone.name)
//   return stone.price * stone.quantity;
// }
//
//onsole.log(calcTotalPrice(stones, "Бриллиант"));


/**
 *? Создайте объект calculator с тремя методами
 *? read(a, b) - принимает два аргумента и сохраняет их
 *? как свойства объекта
 *? sum() возвращает сумму сохраненных значений
 *? multiply() перемножает сохраненные значения и возвращает результат
 */

// const calculator = {
//   read(a, b) {
//     this.vel1 = a;
//     this.vel2 = b
//   },
//   sum() {
//     return this.vel1 + this.vel2
//   },
//   multiply() {
//     return this.vel1 * this.vel2
//   }
// }
 
// calculator.read(2, 5);
// calculator.sum()
// console.log(calculator.sum());
// console.log(calculator.multiply());
// console.log(calculator)

// 5=================
/**
 *? Напишите функцию updateObject, которая принимает объект и возвращает
 *? новый объект без указанного параметра
 *? Ожидаемый результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1}
 *? https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript
 */
const obj = { a: 1, b: 2, c: 3 };

function updateObject(object, string) {
    const newObject = {...object};
    console.log(newObject);
    delete newObject[string];
    return newObject;
}
console.log(updateObject(obj, 'b'));

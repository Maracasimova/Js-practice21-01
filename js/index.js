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

 const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 6 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 150, quantity: 100 },
];


const calcTotalPrice = (stones, stonesName) => {

  for (const stone of stones) {
    if (stonesName === stone.name)
    return stone.price * stone.quantity;
  }
}
console.log(calcTotalPrice(stones, "Бриллиант"));

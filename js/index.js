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

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

let sum = 0;

for (const salary of Object.values(salaries)) {
  sum += salary;

}
console.log(sum);
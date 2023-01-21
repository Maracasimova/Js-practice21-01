/**
 *?      Напишите программу, которая получит от пользователя
 *?      число (количество минут) и выведет в консоль
 *?      строку в формате часов и минут
 *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *?      70 === 01:10
 */


let time = +prompt("Введите время в минутах");
let timeHours = Math.floor(time / 60);
let modifyHours = String(timeHours).padStart(2, "0");
let timeMinutes = time % 60;
let modifyMinutes = String(timeMinutes).padStart(2, "0");

console.log(timeHours);
console.log(`${modifyHours}:${modifyMinutes}`);

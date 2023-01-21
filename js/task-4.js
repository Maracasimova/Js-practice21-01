/**
 *?     При помощи цикла for сложите 
        все четные числа от  min до max
 */

const max = 3;
const min = 0;

let total = 0;
for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
        total += i;
    }
}
console.log(total);
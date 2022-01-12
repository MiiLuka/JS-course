/// Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
//Выведите результат с помощью console.log

// вариант с for
let count = 15;
let n = -20;
let m = -15;
let array = [];

for (let i = 0; i < count; i++) {
  array.push(Math.round(Math.random() * Math.abs(n - m) + Math.min(n, m)));
}

console.log(array);

// вариант с while

let array2 = [];
let a = 0;
while (a++ < count) {
  array2.push(Math.round(Math.random() * Math.abs(n - m) + Math.min(n, m)));
}

console.log(array2);

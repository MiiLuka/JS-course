let a = 13.89012358;
let b = 45.64656456;
let n = 5; 
let A_Normalized = Math.round(a * Math.pow(10, n));
let B_Normalized = Math.round(b * Math.pow(10, n));
let A_fractional = Math.round(a % 1 * Math.pow(10, n));
let B_fractional = Math.round(b % 1 * Math.pow(10, n));
console.log('получившееся целое число A', A_Normalized);
console.log('получившееся целое число B', B_Normalized);
console.log('получившаяся дробная часть числа А', Math.round(a % 1 * Math.pow(10, n)));
console.log('получившаяся дробная часть числа B', Math.round(b % 1 * Math.pow(10, n)));
//сравнение целых чисел
console.log('первое полученное число больше', A_Normalized > B_Normalized);
console.log('первое полученное число меньше', A_Normalized < B_Normalized);
console.log('первое полученное число больше или равно', A_Normalized >= B_Normalized);
console.log('первое полученное число меньше или равно', A_Normalized <= B_Normalized);
console.log('Полученные числа равны', A_Normalized === B_Normalized);
console.log('числа точно не равно', A_Normalized !== B_Normalized);
//сравнение дробной части
console.log('первое полученное число больше', A_fractional > B_fractional);
console.log('первое полученное число меньше', A_fractional < B_fractional);
console.log('первое полученное число больше или равно', A_fractional >= B_fractional);
console.log('первое полученное число меньше или равно', A_fractional <= B_fractional);
console.log('Полученные числа равны', A_fractional === B_fractional);
console.log('числа точно не равно', A_fractional !== B_fractional);
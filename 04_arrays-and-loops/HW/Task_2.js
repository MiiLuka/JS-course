//С помощью цикла создать перевёрнутый вариант произвольной строки.
//Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».
let string = "Привет, мир!";

let splitString = string.split(""); // создаем массив из строки
let reverseArray = splitString.reverse(); //реверсируем элементы массива
let joinArray = reverseArray.join(""); //Снова в строку 

console.log(joinArray);

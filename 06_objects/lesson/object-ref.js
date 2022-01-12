let digit = 20;
let otherDigit = digit; //присваиваем новой переменной значение первой

//исходное значение не меняется, так как otherDigit копирует значение из digit
otherDigit += 5;
//после +=5 digit остается =20, а otherDigit становится равным 25
console.log(digit, otherDigit);



let obj = { model: 'VW Polo',};
let otherObj = obj; // otherObject contains LINK to the object, NOT the object itself

//obj и otherObj ссылаются на на один и тот же объект, поэтому свойство поменяется и там, и там
otherObj.model = 'Audi'; //change the existing property
obj.year = '2019'; //add new property

console.log(obj, otherObj);

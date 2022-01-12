let me = {
  name: 'Bob',
};

// подмешиваем свойства в свежесозданный ПУСТОЙ обьект

let newMe = Object.assign (
  {}, // НОВЫЙ пустой объект
  me,
  { name: 'Ivan',},
  { surname: 'Petrov',},
);

console.log(newMe);// me и newMe - это разные объекты
console.log(me);  // me не изменился

console.log(me === newMe); //false


// SPREAD
let bob = {
  name: 'Bob',
};

let newMeBySpread ={
  ...bob,    // bob НЕ ИЗМЕНИЛСЯ
  ...{ name: 'Peter',},
  ...{ surname: 'Ivanov',},
};



console.log(newMeBySpread);// bob и newMeBySpread РАЗНЫЕ объекты
console.log(bob);

console.log(me === newMeBySpread); //false

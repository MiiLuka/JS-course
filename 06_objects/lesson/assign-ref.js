let me = {
  name: 'Michael',
};

//Функция вернет получившийся объект, но это будет тот же объект
//который мы переделали в первый аргумент, то есть она изменит объект ME и вернет его
let newMe = Object.assign(
  me,    // ME меняем и возвращаем
  { name: 'NO Michael',},
  { surname: 'Petrov',},
);

console.log(newMe);// me и newMe - один объект, который мы изменили
console.log(me);

console.log(me === newMe); //true

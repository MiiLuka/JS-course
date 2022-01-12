// obj1 и obj2 - это ссылки на один и тот же объект...
let obj1 = { name: 'name',};
let obj2 = obj1;

//...и они равны
console.log(obj1===obj2); //true

obj2 = { name: 'name',}; //obj2 становится ссылкой на новый объект, хоть и с такими же свойствами

//...теперь obj1 и obj2 - это ссылки на разные объекты и они НЕ РАВНЫ 
console.log(obj1===obj2); //false

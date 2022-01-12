let name = 'Ivan';
let surname = 'Petrov';

function getFullName() {
    return this.name + ' ' + this.surname;
}

let obj = { name, surname, getFullName };

console.log(obj.getFullName());

obj.whoAmI = function() {
    console.log(`Меня зовут ${this.name} ${this.surname}`);
};

obj.whoAmI();

//Удаляет метогд из объекта
delete obj.getFullName;


//Присвоение одной и той же функции разным объектам
let otherObj = {
    someMethod: getFullName,
};
otherObj.someOtherMethod = getFullName;

console.log(otherObj.someMethod());//Меня зовут undefined
console.log(otherObj.someOtherMethod());//Меня зовут undefined

//при выхове метода this всегда будет принимать значение того объека,который находится слева от точки!

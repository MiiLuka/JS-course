// typeof returns STRING

// простые. Значения копируются при присваивании (передаются по значению)
typeof 1; // number
typeof 'adc'; //string
typeof false; //boolean
typeof 123n; //bigint
typeof Symbol();//symbol


// составные. Объекты.
//являются ссылочным типом - их значение НЕ КОПИРУЕТСЯ при присваивании, а копируются только ссылки на них
//могут объединять несколько значений других типов или даже вложенных объекты
//массивы и функции являются частными случаями объектов

typeof {}; //object
typeof []; //object
typeof function () { };// function

// нулевые. У каждого может всего одно значение
typeof undefined; // undefined
typeof null; // object


// расхождение typeof и системы типов
typeof null;// object. хотя реальный тип значения- null
typeof function() {} ;// function, хотя в системе типов функции не выделяются в отдельный тип




// Пример
function getStringValue(unknown) {
    if (typeof unknown === 'string') {
        return unknown;
    }
    if (typeof unknown === 'function') {
        return unknown();
    }
    if (typeof unknown === 'object') {
        return unknown.toString();
    }
    return '' ;
};

console.log(getStringValue('String'));

console.log(getStringValue(function () {
    return new Date().getFullYear();
}));

console.log(getStringValue([1,2,3]));

console.log(getStringValue({}));

console.log(getStringValue(true));

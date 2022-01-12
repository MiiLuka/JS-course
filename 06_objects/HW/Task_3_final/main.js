//Разные типы данных
let arrayExample =[1, 'два', 'три', 4, "пять", '6', "семь"];
let objectExample = {
	'1': 'string1',
	2: 'string2',
	'string3': 3,
	3: 33,
};
let arrayOfObjectsExample = [{
  value: 'Москва',
  label: 'Москва',
},
{
  value: 'Санкт-Петербург',
  label: 'Санкт-Петербург',
},
{
  value: 'Пермь',
  label: 'Пермь',
},
{
  value: 'Екатеринбург',
  label: 'Екатеринбург',
},
{
  value: 'Хабаровск',
  label: 'Хабаровск',
}];

function createElem(tagName, content, object) {
	let еl = document.createElement(tagName);
	еl.textContent = content;
	for (let key in object) {
		еl.setAttribute( key, object[key])
	}
	return еl;
}

// Функции преобразования разных типов данных 1
function arrayTransformation(array) {
	if (typeof(array[0])==='object') {
		return array;
	}
	let arrayOfObjects = [];
	for (let item of array) {
		let newDataObject = {};
		newDataObject['value'] = item;
		newDataObject['label'] = item;
		arrayOfObjects.push(newDataObject);
	}
	return arrayOfObjects;
}

// Функции преобразования разных типов данных 2
function objectTransformation(object) {
	let arrayOfObjects = [];
	for (let key in object) {
		let newDataObject = {};
		newDataObject['value'] = key;
		newDataObject['label'] = object[key];
		arrayOfObjects.push(newDataObject);
	}
	return arrayOfObjects;
}

function dropdownList(data, valueDefault) {
	let content = 'text content';
	let dropdownListEl = createElem('select');
	let attributesForOption;

	if (Array.isArray(data)) {
		attributesForOption = arrayTransformation(data);
	}
	else {
		attributesForOption = objectTransformation(data);
	}

	attributesForOption.forEach((item) => {
		const optionEl = createElem('option', content, item);

		if (optionEl.value === valueDefault) {
			optionEl.setAttribute('selected', '');
		}
		dropdownListEl.append(optionEl);
	})
	return dropdownListEl;
}
//let valueDefault = 'str';
//let dropdownListEl = dropdownList(arrayOfObjectsExample);

let dropdownListEl = dropdownList(arrayOfObjectsExample, 'Санкт-Петербург');
